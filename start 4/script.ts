// FETCH DI ELEMENTI DAL JSON

class Abbigliamento {
  prezzo: number;
  saldo: number;
  constructor(_prezzo: number, _saldo: number) {
    this.prezzo = _prezzo;
    this.saldo = _saldo;
  }

  getsaldocapo(): number {
    return (this.prezzo * this.saldo) / 100;
  }

  getacquistocapo(): number {
    return this.prezzo - this.getsaldocapo();
  }
}

getData();

function getData() {
  fetch("http://localhost:3000/capi")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var capi: any = [];
      capi = data;

      console.log("👔 ABBIGLIAMENTO");

      for (let i = 0; i < capi.length; i++) {
        console.log(`CAPO ${i + 1}: ${capi[i].capo}`);
        console.log(capi[i]);
        var capo1 = new Abbigliamento(capi[i].prezzoivainclusa, capi[i].saldo);
        console.log(
          "Totale " + capi[i].capo + ": € " + capo1.getacquistocapo()
        );
        console.log("------------------------------");
      }

      console.log(capi);
    });
}
