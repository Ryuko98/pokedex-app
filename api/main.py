from fastapi import FastAPI

app = FastAPI(title="Pokédex API")

@app.get("/")
def read_root():
    return {"status": "OK", "message": "Pokédex API funcionando correctamente"}