import sqlite3
from sqlite3 import Error


def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by the db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print(e)

    return conn


def get_all_product(conn):
    """
    Query all rows in the tasks table
    :param conn: the Connection object
    :return:
    """
    cur = conn.cursor()
    cur.execute("SELECT * FROM PRODUCT")
    rows = cur.fetchall()

    return rows


def get_user_basket(conn, id_user):
    try:
        cur = conn.cursor()
        cur.execute(f'''
                    SELECT * FROM PRODUCT
                    WHERE ID IN (
                        SELECT ID_PRODUCT FROM BASKET
                        WHERE ID_USER = {id_user}
                    )
                    ''')

        rows = cur.fetchall()
        return rows
    except Error as e:
        return e



def add_to_basket(conn, id_user, id_product):
    try:
        cur = conn.cursor()
        cur.execute(f"INSERT INTO BASKET (ID_USER, ID_PRODUCT) VALUES ({id_user}, {id_product})")
        return { 'message': 'success', 'status': 200 }
    except Error as e:
        return e


def remove_from_basket(conn, id_user, id_product):
    try:
        cur = conn.cursor()
        cur.execute(f"""
                    DELETE FROM BASKET
                    WHERE ID_USER = {id_user} AND ID_PRODUCT = {id_product}   
                    """)
        return { 'message': 'success', 'status': 200 }
    except Error as e:
        return e

