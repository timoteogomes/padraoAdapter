// Classe Galinha
class Galinha {
    cacarejar() {
      console.log("Cocoricó!");
    }
  }
  
  // Classe Pato
  class Pato {
    grasnar() {
      console.log("Quack!");
    }
  }
  
  // Classe AdaptadorPato que adapta um pato para se comportar como uma galinha
  class AdaptadorPato {
    constructor(pato) {
      this.pato = pato;
    }
  
    cacarejar() {
      this.pato.grasnar();
    }
  }
  
  // Classe AdaptadorPatoDemo para demonstrar o uso da classe AdaptadorPato
  class AdaptadorPatoDemo {
    static demonstrar() {
      const pato = new Pato();
      const adaptador = new AdaptadorPato(pato);
  
      console.log("O pato diz:");
      pato.grasnar();
  
      console.log("O adaptador de pato diz como uma galinha:");
      adaptador.cacarejar();
    }
  }
  
  // Executando a demonstração do adaptador de pato
  AdaptadorPatoDemo.demonstrar();
  