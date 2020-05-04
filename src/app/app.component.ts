import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';


interface FoodNode {
  name: string;
  value?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'RxJS',
    children: [
      {name: '김석곤', value: 'test'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Angular',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-leaning';

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.dataSource.data = TREE_DATA;
  }

  navigateToPage(name: string) {
    // if (name === 'Degrees') {
    //   this.router.navigate([<THE_ROUTE_YOU_WISH_TO_NAVIGATE_TO>]);
    // }
    alert(name);
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
