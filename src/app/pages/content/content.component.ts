import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../database/fakeData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() coverImage:string = "";
  @Input() contentTitle:string = "";
  @Input() contentDescription:string = "";
  private id:string | null = "0" // Aqui irá receber o valor recuperado em 'value.get("id")'.

  constructor(
  private route: ActivatedRoute // Esta propriedade Ativa a função 'route.paramMap' abaixo.
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>   // Esta função captura o valor do 'id' da rota que foi clicada.
      this.id = value.get("id")
      )

      this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const result = fakeData.filter( article => article.id == id)[0]

    this.coverImage = result.image
    this.contentTitle = result.title
    this.contentDescription = result.description
  }

}
