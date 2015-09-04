if (Meteor.isClient) {
  var email = 'exmpale@gmail.com';
  var options = { 
      secure: true // choose between `http://www.gravatar.com` 
                   //            and `https://secure.gravatar.com`
                   //            default is `false`
  }; 

  var md5Hash = Gravatar.hash(email);
  // 5658ffccee7f0ebfda2b226238b1eb6e

  var url = Gravatar.imageUrl(email, options);
  // https://secure.gravatar.com/avatar/5658ffccee7f0ebfda2b226238b1eb6e

  var url2 = Gravatar.imageUrl(md5Hash, options);
  console.log(url);
  console.log(url2);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
