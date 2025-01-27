import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Categories = (navigation) => {
  let categories = useSelector((state) => state.ALL_PRODUCTS.categories);

  let images = [
    {name:"Mouses",img:"https://w.wallhaven.cc/full/13/wallhaven-139plv.jpg"}, //mouse
    {name:"Keyboards",img:"https://w.wallhaven.cc/full/e7/wallhaven-e7q8r8.png"}, //teclado
    {name:"Notebooks",img:"https://static.lenovo.com/ww/campaigns/2022/legion-brand/lenovo-campaign-legion-brand-agnostic-feature-2-7-series-mobile.jpg"}, //notebook
    {name:"KitPC",img:"https://w.wallhaven.cc/full/qd/wallhaven-qdvjjd.jpg"}, //KIT PC
    {name:"Headphones",img:"https://w.wallhaven.cc/full/ym/wallhaven-ymp3mx.jpg"}, //headphone
  ];
  let data = [];
  categories?.map((name, index) => {
    var i=[]
    images.filter(x=> x.name===name? i.push(x.img): null )
    data.push({ name: name, img:i[0] , id: index });
    var i=[]
  });

  return (
    <View style={styles.realContainer}>
      {data.map((item, index) => {
        return(
          <TouchableOpacity 
              style={styles.container}
              key={index}
              onPress={()=>navigation.navigate("Allproducts", item.name)}>
              <Image 
                source={{ uri: item.img }} 
                style={styles.img} 
                keyExtractor={(item) => item.id} // rompe el componente, ahora tira un warnin
              />  
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  realContainer: {
    flexDirection: "row",
    flexWrap:"wrap",
  },
  container: {
    flexDirection: 'column',
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical:10,
    heigth: '100%',
    width: '50%',
    borderRadius: 15,
  },
  img: {
    width: '100%',
    height: 150,
    borderRadius: 10
  },
  text: {
    position: 'absolute',
    paddingTop: 100,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlignVertical: 'center'
  }
});

export default Categories;
