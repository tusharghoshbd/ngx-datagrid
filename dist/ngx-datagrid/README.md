# Ngx Data Grid

**Ngx Data Grid** is an angular library for presenting data in list. This library is easy to integrate in your angular component. This library supports search, pagination features. You can also customize this library as your requirements

## Demo
![](https://media1.giphy.com/media/PjOmTZRwIyGCH8jzvI/giphy.gif)

[Demo in stackblitz](https://stackblitz.com/edit/ngx-datagrid?file=src/app/app.component.ts)

## Installation

As a prerequisite, you need [boostrap](https://getbootstrap.com/) library.

```ts
npm i @tusharghoshbd/ngx-datagrid
```



## Usage

#### Html file
```html
 <ngx-datagrid 
        gridClass="list-group-item"
        [data]="data"
        [options]="options"
        (itemClick)="onItemClick($event)"> 
        <ng-template let-rowDetail #header>
            <!-- your code for header-->
        </ng-template>
        <ng-template let-rowDetail #body>
            <!-- your code for body-->
        </ng-template>
 </ngx-datagrid>
```

#### Ts file
```ts
options:any={
    itemPerPageDDL : [5, 10, 20, 30], // default
    itemClickEvent: true   //default, true|false
};

data  = []
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/)