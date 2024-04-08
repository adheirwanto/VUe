const DataProduct ={
    products:[
        {
            id:'001',
            name:'Sepatu Kece',
            price:200000,
            desc:'Sepatu keren cocok segala usia,jenis,ras,agama,suku,budaya,gender,dan bla bla',
            feather:'shopping-cart',
            image:'https://tse3.mm.bing.net/th?id=OIP.na2kPmk4UQO2aJDRSw4gtwHaHa&pid=Api&P=0&h=180'
        },
        {
            id:'002',
            name:'Hoodie Keren',
            price:150000,
            desc:'Hoodie keren cocok segala usia,jenis,ras,agama,suku,budaya,gender,dan bla bla',
            feather:'shopping-cart',
            image:'https://tse3.mm.bing.net/th?id=OIP.exJveZLWq4wUJshUjBRHAQHaHa&pid=Api&P=0&h=180'
        },
        {
            id:'003',
            name:'Batu Hytam',
            price:900000,
            desc:'Batu Hitam cocok segala usia,jenis,ras,agama,suku,budaya,gender,dan bla bla',
            feather:'shopping-cart',
            image:'https://tse1.mm.bing.net/th?id=OIP.XdNFW02dZhwdxB1nv9IiPwHaE7&pid=Api&P=0&h=180'
        },
        {
            id:'004',
            name:'Kucing Imut',
            price:'Free',
            desc:'Kucing imut cocok segala usia,jenis,ras,agama,suku,budaya,gender,dan bla bla',
            feather:'shopping-cart',
            image:'https://tse2.mm.bing.net/th?id=OIP.G9Kc5LmlQVnJXwERvUnVPAHaHa&pid=Api&P=0&h=180'
        },
        {
            id:'005',
            name:'Sayur Enak',
            price:'Free',
            desc:'Sayur Enak cocok segala usia,jenis,ras,agama,suku,budaya,gender,dan bla bla',
            feather:'shopping-cart',
            image:'https://tse2.mm.bing.net/th?id=OIP.Qvyn-ludbJ2VU11-PkwXwgHaD8&pid=Api&P=0&h=180'
        },
        {
            id:'006',
            name:'Kucing Stress',
            price:'271.000.000.000.000',
            desc:'Kucing Jelek tidak cocok untuk segala usia,jenis,ras,agama,suku,budaya,gender,dan bla bla',
            feather:'shopping-cart',
            image:'https://tse2.mm.bing.net/th?id=OIP.G9Kc5LmlQVnJXwERvUnVPAHaHa&pid=Api&P=0&h=180'
        }
    ]

}

var app = new Vue({
    el: '#app',
    data:DataProduct
});