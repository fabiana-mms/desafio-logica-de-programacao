class Heroi {
   constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
   }

   atacar() {
      let ataque;

      switch (this.tipo) {
         case "mago":
            ataque = "usou magia";
            break;
         case "guerreiro":
            ataque = "usou espada";
            break
         case "monge":
            ataque = "usou artes marciais";
            break
         case "ninja":
            ataque = "usou shuriken";
            break
         default:
            ataque = "fez um ataque desconhecido";
      }

      console.log(`O ${this.tipo} atacou usando ${ataque}`);
   }
}

const mago = new Heroi("Dumbledore", 150, "mago");
const guerreiro = new Heroi("Jason", 45, "guerreiro");
const monge = new Heroi("Atala", 88, "monge");
const ninja = new Heroi("Naruto", 18, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
