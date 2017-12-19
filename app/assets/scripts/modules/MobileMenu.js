import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header");
   this.menuIcon = $(".site-header__menu-icon");
   this.menuContent = $(".site-header__menu-content");
   this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.menuContent.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}








export default MobileMenu













// class Person {
//   constructor (fullName, favColor) {
//     this.name = fullName;
//     this.favoriteColor = favColor;
//   }

//   great() {
//     console.log("HELLO, my name is " + this.name +  ".")
//   } 
// }




// export default Person
// // module.exports = Person;