import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

class Ingredient {
  nom: string;
  qte: string;
}

class Recette {
  id: number;
  nom: string;
  img: string;
  description: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  recettes: Recette[] = [
    {
      id: 1,
      nom: "Baklawa",
      img: "baklawa2.jpg",
      description: `<p> Les Baklawa, cette pâtisserie venue du Moyen-Orient et à quelques variantes près, fait rêver les papilles des gourmands.</p>
         <p>Originaire de la Turquie. La pâte utilisée est une pâte très fine beurrée ou amidonée selon l'origine.</p>
         <p>Le montage respecte la règle de 7 couches de pâte (ou 6 chez certaines familles), ensuite la farce et enfin 6 couches de pâte, soit au total 13 couches de pâte qui donnent à la Baklawa Algérienne son croustillant et sa générosité.</p>`,
    },
    {
      id: 0,
      nom: "Arayech",
      img: "arayech.jpg",
      description: `<p>Cette pâtisserie Arayeche est une recette typique d’Algérie avec une farce et un glaçage savoureux pour les papilles.
        Des amandes moulues associées à de la vanille et fleur d’oranger lui conférant une touche gourmande qui sera un succès auprès de votre entourage.
        Le glaçage vient sublimer notre pâtisserie avec le parfum acidulé du citron et celui de l’eau de rose.
        Elles font partie des douceurs présentes lors d’événements importants : mariage, fiançailles, baptêmes,…</p>`,
    },
    {
      id: 0,
      nom: "Techarek Messaker ou Cornes de ghazel",
      img: "techarek.jpg",
      description: `<p> les cornes de ghazel, ou le tcarek msaker est un gateau algerien très délicieux, ce sont des petits croissants fourrés au amandes et enrobes de sucre glace.</p>`,
    },
    {
      id: 0,
      nom: "Margaghit aux pistaches",
      img: "arayech.jpg",
      description: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos facere illo impedit laboriosam nesciunt officia quisquam voluptatibus. Asperiores atque cum debitis deserunt harum iste perspiciatis quae quisquam velit voluptas!</p>`,
    },
    {
      id: 0,
      nom: "Mechouek",
      img: "mchewek-Mima1.jpg",
      description: `<p>Faux mchewek facile facile pour le café. le mchewek est une pâtisserie traditionnelle. J’ai réalisé cette recette à ma façon d’où le titre, facile à réaliser et idéal pour le café</p>`,
    }
  ];

  afficherUneRecette() {
    this.navCtrl.push('RecettePage');
  }
}
