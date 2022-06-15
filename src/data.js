const data = {
    products : [
        {
            id: '1',
            name: 'Classic Chicken Burger',
            price: 199,
            image: 'https://media.istockphoto.com/photos/closeup-of-a-veggie-burger-with-copy-space-picture-id1331109186?s=612x612',
            color: 'red'
        },
        {
            id: '2',
            name: 'Pepperoni Pizza',
            price: 249,
            image: 'https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=20&m=938742222&s=170667a&w=0&h=HyfY78AeiQM8vZbIea-iiGmNxHHuHD-PVVuHRvrCIj4=',
            color: 'green'
        },
        {
            id: '3',
            name: 'Chicken Biriyani',
            price: 169,
            image: 'https://media.istockphoto.com/photos/chicken-biriyani-picture-id1345624336?b=1&k=20&m=1345624336&s=170667a&w=0&h=twUdtaXYy5VPB0-tdRHcqgC4C5WNSFUgcNBPILowg5g=',
            color: 'red'
        },
        {
            id: '4',
            name: 'Spicy Spaghetti',
            price: 149,
            image: 'https://media.istockphoto.com/photos/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-picture-id1325172440?b=1&k=20&m=1325172440&s=170667a&w=0&h=WS2gPeU01_yzJYsiaHBhOSfrHVKMn-kBxzgsz61a2p8=',
            color: 'green'
        },
        {
            id: '5',
            name: 'Butter Naan',
            price: 49,
            image: 'https://media.istockphoto.com/photos/indian-naan-bread-with-herbs-and-garlic-seasoning-on-plate-picture-id1253943176?b=1&k=20&m=1253943176&s=170667a&w=0&h=-quEK7LqmUkzoI8Sl9doT6Ijx4XdB52eNDvTYxqWT7s=',
            color: 'green'
        },
        {
            id: '6',
            name: 'Palak Parantha',
            price: 69,
            image: 'https://media.istockphoto.com/photos/methi-paratha-picture-id1307253311?b=1&k=20&m=1307253311&s=170667a&w=0&h=X1mBvCiy3-O7Vzwdr99sY-rIHZ0rQK7tpYLNdBi4PBI=',
            color: 'green'
        },
        {
            id: '7',
            name: 'Tandoori Naan',
            price: 39,
            image: 'https://media.istockphoto.com/photos/tandoori-naan-bread-or-roti-in-a-basket-indian-clay-oven-baked-bread-picture-id1338949691?b=1&k=20&m=1338949691&s=170667a&w=0&h=Z0a1fqMlwhGgMwGaiRGW7N1RK9St_8s12QpFaXAEPh4=',
            color: 'green'
        },
        {
            id: '8',
            name: 'Plain Naan',
            price: 29,
            image: 'https://media.istockphoto.com/photos/homemade-roti-chapati-flatbread-picture-id1298650125?b=1&k=20&m=1298650125&s=170667a&w=0&h=VVlALdUrwZM02GlZfOOw_Q1PjRM5Co-lUUhsSRVvcFE=',
            color: 'green'
        },
        {
            id: '9',
            name: 'Chicken Dum Biriyani',
            price: 189,
            image: 'https://media.istockphoto.com/photos/chicken-biryani-picture-id1058029096?b=1&k=20&m=1058029096&s=170667a&w=0&h=jJeEXeopmbH1EVCPtzt617sRV7GqNbydJGNfxaiznfg=',
            color: 'red'
        },
        {
            id: '10',
            name: 'Veg Fried Rice',
            price: 99,
            image: 'https://media.istockphoto.com/photos/veg-fried-rice-in-gray-bowl-isolated-on-white-backdrop-veg-fried-rice-picture-id1249734204?b=1&k=20&m=1249734204&s=170667a&w=0&h=UW1vs0vHvdkU5ftGkjTP1GjAtNsYlsGfm1DSFNMRHo4=',
            color: 'green'
        },
        {
            id: '11',
            name: 'Jeera Rice',
            price: 89,
            image: 'https://media.istockphoto.com/photos/jeera-rice-cumin-rice-picture-id609930740?b=1&k=20&m=609930740&s=170667a&w=0&h=YwwnL5iLonqjKBIGwtpLdFM_jVBxdLOwuoPyixRAue4=',
            color: 'green'
        },
        {
            id: '12',
            name: 'Kashmiri Pulao',
            price: 99,
            image: 'https://media.istockphoto.com/photos/pulao-or-basmati-rice-made-with-indian-spices-and-dry-fruits-served-picture-id1396209345?b=1&k=20&m=1396209345&s=170667a&w=0&h=0l5-mSbn_8qVQiOvCZfNW-0USCMsuCNUnemVDI-kBLA=',
            color: 'green'
        },
        {
            id: '13',
            name: 'Butter Paneer',
            price: 129,
            image: 'https://media.istockphoto.com/photos/curd-paneer-masala-picture-id1354042949?b=1&k=20&m=1354042949&s=170667a&w=0&h=SfQDDFr2DOHdkKT3FPUufY8Thm4REe-ZAdw5l3VWd4U=',
            color: 'green'
        },
        {
            id: '14',
            name: 'Matar Paneer',
            price: 119,
            image: 'https://media.istockphoto.com/photos/green-peas-or-matar-paneer-curry-picture-id1325272041?b=1&k=20&m=1325272041&s=170667a&w=0&h=0bXXbN1Udw9siz-pPEDzYSZcY18_3G8D0dz1uosGkgY=',
            color: 'green'
        },
        {
            id: '15',
            name: 'Palak Paneer',
            price: 109,
            image: 'https://media.istockphoto.com/photos/bowl-of-palak-paneer-made-of-paneer-cheese-dipped-in-mildly-spiced-picture-id1249888822?b=1&k=20&m=1249888822&s=170667a&w=0&h=HbfLwP1saVxn4YjJUKuMATA68AbdNhqeRmAOxbqpOtM=',
            color: 'green'
        },
        {
            id: '16',
            name: 'Dum Aloo',
            price: 89,
            image: 'https://media.istockphoto.com/photos/dum-aloo-picture-id1377853639?b=1&k=20&m=1377853639&s=170667a&w=0&h=oxss6Ckd9KvTafgvy2oDfMYjXimA9Bbf9zR-ikKU7lU=',
            color: 'green'
        },
        {
            id: '17',
            name: 'Chicken Lollypop',
            price: 169,
            image: 'https://media.istockphoto.com/photos/chicken-lollipop-spicy-mala-sichuan-pepper-flavor-suace-chinese-style-picture-id1297553194?b=1&k=20&m=1297553194&s=170667a&w=0&h=Hk88A4Gx5V-YaH_uakACJ6rPc6ry9IUyDwj2ZoVdreA=',
            color: 'red'
        },
        {
            id: '18',
            name: 'Chicken Tandoor (4pc.)',
            price: 249,
            image: 'https://media.istockphoto.com/photos/tandoori-chicken-picture-id1363311536?b=1&k=20&m=1363311536&s=170667a&w=0&h=7b6YV71hqtvEOfsWs9C88sZZSP9bLh1CGSx3_EpuHfo=',
            color: 'red'
        },
        {
            id: '19',
            name: 'Chilly Chicken',
            price: 179,
            image: 'https://media.istockphoto.com/photos/indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-picture-id1072953386?b=1&k=20&m=1072953386&s=170667a&w=0&h=MnaYWOGE24hdF35uswONF05dX5ECmy4NycpEf4iVU6c=',
            color: 'red'
        },
        {
            id: '20',
            name: 'Bamboo Chicken',
            price: 159,
            image: 'https://media.istockphoto.com/photos/grilled-chicken-on-bamboo-skewers-picture-id521040304?b=1&k=20&m=521040304&s=170667a&w=0&h=J6h0EtumhD_YAKax2r2PIc_kO1sZ5UyZ1gymFEbQ55o=',
            color: 'red'
        }
    ]
};

export default data;