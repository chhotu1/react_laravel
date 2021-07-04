import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import IndexNavbar from "../../../components/Navbars/IndexNavbar";
import Footer from "../../../components/Footers/Footer.js";
import FormValidation from "./../../../components/FormValidation/FormValidation";
class Login extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={
      form:{
        email:'',
        password:'',
      },
      formErrors:{
        email:'',
        password:'',
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(e) {
    e.preventDefault();
    this.setState({
        formErrors: {
        ...this.state.formErrors,
        [e.target.name]: FormValidation.loginForm(e.target.name, e.target.value)
        },
        form: {
        ...this.state.form,
        [e.target.name]: e.target.value
        }
    });
  }

  handleSubmit(e){
    const { form, formErrors } = this.state;
    const errorObj = FormValidation.validateForm(form, formErrors, FormValidation.loginForm);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    }
    let data ={
      name:"chhotu",
      token:"jgfdsxcvbn",
      role:1,
    }
    for (var i in data) {
      localStorage.setItem("user." + i, data[i]);
    }
    setTimeout(() => {
        this.props.history.push("/admin");
    }, 500);
    console.log(form,'form');

  }

  render (){
      return (
        <>
          <IndexNavbar fixed />
          <div className="container mx-auto px-4 h-full mb-4" style={{marginTop:100,marginBottom:100}}>
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-blueGray-500 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={require("assets/img/github.svg").default}
                        />
                        Github
                      </button>
                      <button
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={require("assets/img/google.svg").default}
                        />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form method="post" onSubmit={this.handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email" name="email" onChange={this.handleChange}
                        />
                        {this.state.formErrors.email && (<span className="error">{this.state.formErrors.email}</span>)}
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password" name="password" onChange={this.handleChange}
                        />
                        {this.state.formErrors.password && (<span className="error">{this.state.formErrors.password}</span>)}

                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button" onClick={this.handleSubmit.bind(this)}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>


                    <div className="flex flex-wrap mt-6 relative">
                      <div className="w-1/2">
                        <a style={{color:'#000000'}} href="#pablo" onClick={(e) => e.preventDefault()} className="text-blueGray-200">
                          <small>Forgot password?</small>
                        </a>
                      </div>
                      <div className="w-1/2 text-right">
                        <Link style={{color:'#000000'}} to="/register" className="text-blueGray-200">
                          <small>Create new account</small>
                        </Link>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
    
          <Footer />
          </>
      )
  }
}
export default withRouter(Login);
