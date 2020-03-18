import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-datagrid-test';
  options:any={
      itemPerPageDDL : [5, 10, 20, 30],
      itemClickEvent: true
  };

  data  = [
    {
      "id": "1",
      "name": "Abiy Ahmed Ali",
      "description": "Abiy Ahmed Ali (Amharic: አብይ አህመድ አሊ; born 15 August 1976) is an Ethiopian politician. He was appointed as 12th Prime Minister of Ethiopia on 2 April 2018.[1] He is chairman of both the ruling EPRDF (Ethiopian Peoples’ Revolutionary Democratic Front)[2] and the OPDO (Oromo Peoples' Democratic Organization)"
    },
    {
        "id": "2",
        "name": "Juan Manuel Santos",
        "description": `Juan Manuel Santos Calderón (born 10 August 1951) is a Colombian politician. He became the President of Colombia on 7 August 2010.[1] Santos replaces Álvaro Uribe as president.
        Santos has distanced himself from Uribe. Santos intends work on the social need of the country. `
        
      },
      {
        "id": "3",
        "name": "Liu Xiaobo",
        "description": `Liu Xiaobo[1] (28 December 1955 – 13 July 2017) was a Chinese intellectual, writer, human rights activist and a political prisoner in China.[2]`
      },
      {
        "id": "4",
        "name": "Barack Obama",
        "description": `Barack Hussein Obama II (/bəˈrɑːk huːˈseɪn oʊˈbɑːmə/ (About this soundlisten); born August 4, 1961)[1] is an American politician. He was the 44th President of the United States and the first African-American to hold the office. He is a Democrat. Obama won the 2008 United States presidential election, on November 4, 2008. He was inaugurated on January 20, 2009.`
      },
      {
        "id": "5",
        "name": "Muhammad Yunus",
        "description": `Muhammad Yunus is a Bangladeshi banker and economist who was born on 28 June 1940. He was a professor of economics and is famous for his work in microcredit. Microcredit is a name for giving small loans. `
      },

      {
        "id": "6",
        "name": "Wangari Maathai",
        "description": `Wangari Muta Mary Jo Maathai (1 April 1940 – 25 September 2011) was a Kenyan environmentalist, political activist and the first African woman to receive the Nobel Peace Prize in 2004.[1]`
      },
      {
        "id": "7",
        "name": "Shirin Ebadi",
        "description": `Shirin Ebadi (Persian: شيرين عبادى‎ Širin Ebādi; born 21 June 1947) is an Iranian lawyer, a former judge and human rights activist. She is the founder of Defenders of Human Rights Center in Iran. On 10 October 2003, Ebadi was awarded the Nobel Peace Prize for her "significant and pioneering efforts for democracy and human rights, especially women's, children's, and refugee rights". She was the first ever Iranian to receive the prize.`
      },
      {
        "id": "8",
        "name": "Kim Dae-jung",
        "description": `Kim Dae-jung[3] (January 6, 1925-August 18, 2009) was a South Korean president. In 2000, he got the Nobel Peace Prize. He is the first person from Korea to get a Nobel prize.[4] A Roman Catholic since 1957, he has been called the "Nelson Mandela" of Asia [5] Kim Dae Jung was the President (succeeding Kim Young-sam) from 1998 to 2003. He was born in Haui-do, South Jeolla Province, an island off the South Korean Coast.`
      },
      {
        "id": "9",
        "name": "Mother Teresa",
        "description": `Mother Teresa (born Agnes Gonxha Bojaxhiu, 26 August 1910 – 5 September 1997), was a Roman Catholic nun who started the Missionaries of Charity and won the Nobel Peace Prize in 1979 for her work with people.[2]For over forty years, she took care of needs of those without money, those who were sick, those without parents, and those dying inCalcutta (Kolkata), guided in part by the ideals of Saint Francis of Assisi.`
      },
      {
        "id": "10",
        "name": "Lech Walesa",
        "description": `Lech Walesa (Polish: Lech Wałęsa (pronounced [lɛx vaˈwɛ̃sa])) (born September 29, 1943) was a Polish shipyard worker, trade unionist and a politician who used to be the leader of Solidarity and the President of Poland between 1990 and 1995.[1] Walesa won the Nobel Peace Prize in 1983.`
      },
      {
        "id": "11",
        "name": "Nelson Mandela",
        "description": `Nelson Rolihlahla Mandela (18 July 1918 – 5 December 2013)[1] was a South African politician and activist. On April 27, 1994, he was made the first President of South Africa elected in a fully represented democratic election. Mandela was also the first black President of his country, South Africa.`
      },
      {
        "id": "12",
        "name": "Martti Ahtisaari",
        "description": `Martti Oiva Kalevi Ahtisaari (pronounced About this sound[ˈmɑrt:i ˈoivɑ ˈkɑleʋi ˈɑhtisɑ:ri]) (born 23 June 1937) is a Finnish politician, former President of Finland (1994–2000), Nobel Peace Prize laureate and United Nations diplomat and mediator, noted for his international peace work..`
      },
      {
        "id": "13",
        "name": "European Union",
        "description": `The European Union (abbreviation: EU) is a confederation of 27 member countries in Europe established by the Maastricht Treaty in 1992-1993. The EU grew out of the European Economic Community (EEC) which was established by the Treaties of Rome in 1957. It has created a common economic area with Europe-wide laws allowing the citizens of EU countries to move and trade in other EU countries almost the same as they do in their own. Nineteen of these countries also share the same type of money: the euro..`
      },
  ];



  onItemClick(item:any){
        alert(JSON.stringify(item))
        console.log(item);
  }
    
}
