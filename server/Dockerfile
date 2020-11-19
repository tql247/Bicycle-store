FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

RUN pip3 install fastapi
RUN pip3 install uvicorn

COPY . .
EXPOSE 9000
CMD uvicorn main:app --host 0.0.0.0 --port 9000
