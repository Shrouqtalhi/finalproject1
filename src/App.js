import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Venture from './components/pages/Venture';
import { SliderData } from './components/pages/SliderData';
import Trailer from './components/pages/Trailer'
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import firebase from "./components/utils/firebase"



class App extends Component {
  state = {
    // products: null,
    user: null,
    signInError: "",
    signUpError: "",
    forgetPassError: "",
  }

  async componentDidMount() {
    // const productsData = await getProductsData()
    // this.setState({ products: productsData })
    this.authListener()
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      console.log("user:", user)
      if (user) {
        this.setState({ user: user })
      } else {
        this.setState({ user: null })
      }
    })
  }

  // handleAddSubmit = async data => {
  //   console.log("you submitted this data:", data)
  //   await addProductData(data)
  //   const productsData = await getProductsData()
  //   this.setState({ products: productsData })
  // }

  // handleUpdateSubmit = async (data, id, history) => {
  //   console.log("you submitted this data:", data)
  //   await editProductData(data, id)
  //   const productsData = await getProductsData()
  //   this.setState({ products: productsData }, () => {
  //     history.push("/")
  //   })
  // }

  // handleDelete = async productId => {
  //   if (window.confirm("Are you sure you want to delete this product ?")) {
  //     deleteProductById(productId)
  //     const productsData = await getProductsData()
  //     this.setState({ products: productsData })
  //   }
  // }

  handleSignUp = async (email, password, displayName, photoURL, history) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      const user = firebase.auth().currentUser
      await user.updateProfile({
        displayName: displayName,
        photoURL: photoURL
      })
      this.setState({ signUpError: "" }, () => {
        history.push("/")
      })
    } catch (err) {
      console.log("err signup", err)
      this.setState({ signUpError: err.code })
    }
  }

  handleLogout = () => {
    firebase.auth().signOut()
  }

  handleSignIn = async (email, password, history) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      this.setState({ signInError: "" }, () => {
        history.push("/")
      })
    } catch (err) {
      console.log("err", err)
      this.setState({ signInError: err.code })
    }
  }

  handleForgotPassword = async email => {
    try {
      console.log("forgot email:", email)
      await firebase.auth().sendPasswordResetEmail(email)
    } catch (err) {
      console.log("err", err)
      this.setState({ forgetPassError: err.code })
    }
  }



  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/trailer' component={Trailer} />

            <Route
              path="/sign-up"
              render={props => <SignUp {...props} errorCode={this.state.signUpError} handleSubmit={this.handleSignUp} />}
            />
            <Venture slides={SliderData} />
          </Switch>

        </Router>
      </>
    );
  }
}

export default App;