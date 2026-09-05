import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    imports: [],
    template: `
    <h2>Home Component</h2>
    <div class="content">
      <p>Welcome to my website. This is the home page of my Angular project.</p>
      <p>I made this project for my MEAN stack course. You can check out the other pages using the navbar above.</p>
    </div>
    `,
    styles: `
    h2{
    background-color : tomato;
    text-align : center;
    color: #fff ;
    }
    .content{
    padding: 10px;
    }
    `
})
export class HomeComponent {

}
