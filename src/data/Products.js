let products = [
  {"id":1,"productname":"Gucci Bag","imageurl":"https://images.unsplash.com/photo-1593032465171-8c1c6b2d9f6f","price":"$45","description":"this is for baddies","unit":"piece"},

  {"id":2,"productname":"Nike Shoes","imageurl":"https://images.unsplash.com/photo-1542291026-7eec264c27ff","price":"$60","description":"stylish sneakers","unit":"piece"},
  {"id":3,"productname":"Adidas Shoes","imageurl":"https://images.unsplash.com/photo-1528701800489-20be3c2ea0b9","price":"$55","description":"comfortable shoes","unit":"piece"},
  {"id":4,"productname":"Puma Shoes","imageurl":"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519","price":"$50","description":"sports shoes","unit":"piece"},
  {"id":5,"productname":"Apple iPhone","imageurl":"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9","price":"$900","description":"latest smartphone","unit":"piece"},
  {"id":6,"productname":"Samsung Phone","imageurl":"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5","price":"$800","description":"android smartphone","unit":"piece"},
  {"id":7,"productname":"Laptop Dell","imageurl":"https://images.unsplash.com/photo-1517336714731-489689fd1ca8","price":"$700","description":"work laptop","unit":"piece"},
  {"id":8,"productname":"HP Laptop","imageurl":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853","price":"$650","description":"office use","unit":"piece"},
  {"id":9,"productname":"Sony Headphones","imageurl":"https://images.unsplash.com/photo-1518444028785-8f8c0b1d3c7c","price":"$120","description":"noise cancelling","unit":"piece"},
  {"id":10,"productname":"Boat Earbuds","imageurl":"https://images.unsplash.com/photo-1585386959984-a4155224a1ad","price":"$30","description":"wireless earbuds","unit":"piece"},

  {"id":11,"productname":"Smart Watch","imageurl":"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b","price":"$100","description":"fitness tracking","unit":"piece"},
  {"id":12,"productname":"Men T-Shirt","imageurl":"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab","price":"$20","description":"casual wear","unit":"piece"},
  {"id":13,"productname":"Women Dress","imageurl":"https://images.unsplash.com/photo-1520975916090-3105956dac38","price":"$40","description":"party dress","unit":"piece"},
  {"id":14,"productname":"Jeans","imageurl":"https://images.unsplash.com/photo-1541099649105-f69ad21f3246","price":"$35","description":"denim jeans","unit":"piece"},
  {"id":15,"productname":"Jacket","imageurl":"https://images.unsplash.com/photo-1520974735194-9a4f2b7b8d6b","price":"$80","description":"winter jacket","unit":"piece"},
  {"id":16,"productname":"Sunglasses","imageurl":"https://images.unsplash.com/photo-1511499767150-a48a237f0083","price":"$25","description":"cool shades","unit":"piece"},
  {"id":17,"productname":"Backpack","imageurl":"https://images.unsplash.com/photo-1509762774605-f07235a08f1f","price":"$45","description":"travel bag","unit":"piece"},
  {"id":18,"productname":"Wallet","imageurl":"https://images.unsplash.com/photo-1601597111158-2fceff292cdc","price":"$15","description":"leather wallet","unit":"piece"},
  {"id":19,"productname":"Watch","imageurl":"https://images.unsplash.com/photo-1519741497674-611481863552","price":"$150","description":"luxury watch","unit":"piece"},
  {"id":20,"productname":"Perfume","imageurl":"https://images.unsplash.com/photo-1541643600914-78b084683601","price":"$60","description":"fragrance","unit":"piece"},

  {"id":21,"productname":"Makeup Kit","imageurl":"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9","price":"$70","description":"beauty kit","unit":"piece"},
  {"id":22,"productname":"Gaming Mouse","imageurl":"https://images.unsplash.com/photo-1587202372775-989c1c1b8f1b","price":"$25","description":"rgb mouse","unit":"piece"},
  {"id":23,"productname":"Keyboard","imageurl":"https://images.unsplash.com/photo-1517336714731-489689fd1ca8","price":"$30","description":"mechanical keyboard","unit":"piece"},
  {"id":24,"productname":"Monitor","imageurl":"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf","price":"$200","description":"HD display","unit":"piece"},
  {"id":25,"productname":"Printer","imageurl":"https://images.unsplash.com/photo-1580894908361-967195033215","price":"$120","description":"inkjet printer","unit":"piece"},
  {"id":26,"productname":"Camera","imageurl":"https://images.unsplash.com/photo-1516035069371-29a1b244cc32","price":"$500","description":"dslr camera","unit":"piece"},
  {"id":27,"productname":"Tripod","imageurl":"https://images.unsplash.com/photo-1519183071298-a2962eadc8b6","price":"$35","description":"camera stand","unit":"piece"},
  {"id":28,"productname":"Speaker","imageurl":"https://images.unsplash.com/photo-1512446733611-9099a758e5e0","price":"$80","description":"bluetooth speaker","unit":"piece"},
  {"id":29,"productname":"Power Bank","imageurl":"https://images.unsplash.com/photo-1580910051074-3eb694886505","price":"$20","description":"fast charging","unit":"piece"},
  {"id":30,"productname":"USB Cable","imageurl":"https://images.unsplash.com/photo-1580894894513-541e068a3e2b","price":"$10","description":"type c cable","unit":"piece"},

  {"id":31,"productname":"Charger","imageurl":"https://images.unsplash.com/photo-1580894908361-967195033215","price":"$15","description":"fast charger","unit":"piece"},
  {"id":32,"productname":"Table","imageurl":"https://images.unsplash.com/photo-1505691938895-1758d7feb511","price":"$120","description":"wooden table","unit":"piece"},
  {"id":33,"productname":"Chair","imageurl":"https://images.unsplash.com/photo-1493666438817-866a91353ca9","price":"$60","description":"comfort chair","unit":"piece"},
  {"id":34,"productname":"Sofa","imageurl":"https://images.unsplash.com/photo-1493666438817-866a91353ca9","price":"$300","description":"living room sofa","unit":"piece"},
  {"id":35,"productname":"Bed","imageurl":"https://images.unsplash.com/photo-1505693314120-0d443867891c","price":"$400","description":"king size bed","unit":"piece"},
  {"id":36,"productname":"Lamp","imageurl":"https://images.unsplash.com/photo-1507473885765-e6ed057f782c","price":"$25","description":"night lamp","unit":"piece"},
  {"id":37,"productname":"Fan","imageurl":"https://images.unsplash.com/photo-1581578731548-c64695cc6952","price":"$70","description":"ceiling fan","unit":"piece"},
  {"id":38,"productname":"AC","imageurl":"https://images.unsplash.com/photo-1581093588401-22b63c2e2b9c","price":"$500","description":"air conditioner","unit":"piece"},
  {"id":39,"productname":"Refrigerator","imageurl":"https://images.unsplash.com/photo-1581579188871-45ea61f2a5c8","price":"$600","description":"double door fridge","unit":"piece"},
  {"id":40,"productname":"Microwave","imageurl":"https://images.unsplash.com/photo-1585238342024-78d387f4a707","price":"$150","description":"kitchen oven","unit":"piece"},

  {"id":41,"productname":"Mixer","imageurl":"https://images.unsplash.com/photo-1585238342024-78d387f4a707","price":"$80","description":"kitchen mixer","unit":"piece"}
];

export {products}