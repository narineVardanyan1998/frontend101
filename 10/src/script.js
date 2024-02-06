    // ბატონო გიორგი,ის დავალება რომელიც მოგვეცით ვერ გავაკეთე და უდავალებო კიდე ვერ დავრჩებოდი .
    // მაგიტომ წინა ლექციის მაგალითების დახმარებით დავწერე ეს კოდი .



    //ობიექტი პროდუქტებით და ფასებით
    var products = {
      "ვაშლი": 1.5,
      "ბანანი": 2.0,
      "პორტოხალი": 1.8,
      "მსხალი": 2.2
  };

  //პროდუქტის გვერდზე ჩვენების ფუნქცია
  function displayProducts(productObj) {
      document.write("<h2>პროდუქტები და ფასები:</h2>");
      document.write("<table border='1'>");
      document.write("<tr><th>პროდუქტი</th><th> ფასი ($)</th></tr>");

   // ვახარისხებთ პროდუქტებს და ვაჩვენებთ მათ ფასებს  
      for (var product in productObj) {
          document.write("<tr><td>" + product + "</td><td>" + productObj[product] + "</td></tr>");
      }

      document.write("</table>");
  }

  //ახალი პროდუქტის დამატების ფუნქცია და მისი ფასი
  function addProduct() {
      var newProduct = prompt("შეიყვანეთ ახალი პროდუქტის სახელი:");
      var newPrice = prompt(" შეიყვანეთ ფასი" + newProduct + ":");

  //ვამოწმებთ, რომ შეყვანილი მნიშვნელობები ცარიელი არ არის
      if (newProduct && newPrice) {
     //   გადავაკეთე ფასი რიცხვად და დავამატე ახალი პროდუქტი ობიექტში
          products[newProduct] = parseFloat(newPrice);
    //  გვერდზე მიმდინარე შინაარსის გასუფთავება და განახლებული პროდუქტების ჩვენება
          document.body.innerHTML = "";
          displayProducts(products);
      } else {
          alert("თქვენ არ შეიტანეთ მონაცემები. Გთხოვთ კიდევ სცადეთ.");
      }
  }


  displayProducts(products);

 
  document.write("<br><button onclick='addProduct()'>დაამატეთ ახალი პროდუქტი</button>");