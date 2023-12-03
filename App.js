import Axios from "axios";
import { ErrorMessage, Field, Formik } from "formik";
import * as yup from "yup";
import './App.css';

function App() {
  const handleClickCadastro = (values) => {
    Axios.post("https://localhost:3000/Cadastro", {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      nameprof: values.nameprof,
      categoria: values.categoria,
      descricao: values.descricao,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const handleClickLogin = (values) => {
    Axios.post("https://localhost:3000/Login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };


  const validationLogin = yup.object().shape({
    email: yup.string().email("email inválido").required("este campo é obrigatório"),
    password: yup.string().min(8).required("este campo é obrigatório"),
  });

  const validationCadastro = yup.object().shape({
    name: yup.string().required("este campo é obrigatório"),
    nameprof: yup.string().required("este campo é obrigatório"),
    categoria: yup.string().required("este campo é obrigatório"),
    descricao: yup.string().required("este campo é obrigatório"),
    email: yup.string().email("email inválido").required("este campo é obrigatório"),
    password: yup.string().min(8).required("este campo é obrigatório"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Senhas diferentes"),
  });

  return (
    <div className="container">
      <div>
        <h1>Login</h1>
        <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
          <form className="login-form">
            <div className="login-form-group">
              <Field name="email" type="email" className="form-field" placeholder="Email" />
              <ErrorMessage component="span" name="email" className="form-error" />
            </div>
            <div className="login-form-group">
              <Field name="password" type="password" className="form-field" placeholder="Senha" />
              <ErrorMessage component="span" name="password" className="form-error" />
            </div>
            <button className="btn" type="submit">
              Login
            </button>
          </form>
        </Formik>
      </div>
      
      <h1> Cadastro</h1>
      <Formik initialValues ={{}} onSubmit= {handleClickCadastro} validationSchema={validationCadastro} >
        <form className="login-form">
        <div className="login-form-group">
            <Field name= "name" type="text" className="form-field" placeholder="Nome"></Field>
            <ErrorMessage component="span" name ="name" className = "form-error"></ErrorMessage>

            <div className="login-form-group">
            <Field name= "nameprof" type="text" className="form-field" placeholder="Professor Responsável"></Field>
            <ErrorMessage component="span" name ="nameprof" className = "form-error"></ErrorMessage>

            <div className="login-form-group">
            <Field name= "categoria" type="text" className="form-field" placeholder="Categoria"></Field>
            <ErrorMessage component="span" name ="categoria" className = "form-error"></ErrorMessage>

            <div className="login-form-group">
            <Field name= "descricao" type="text" className="form-field" placeholder="Descrição"></Field>
            <ErrorMessage component="span" name ="descricao" className = "form-error"></ErrorMessage>

          <div className="login-form-group">
            <Field name= "email" type="email" className="form-field" placeholder="Email"></Field>
            <ErrorMessage component="span" name ="email" className = "form-error"></ErrorMessage>

            <div className="login-form-group">
            <Field name= "password" type="password" className="form-field" placeholder="Senha"></Field>
            <ErrorMessage component="span" name ="password" className = "form-error"></ErrorMessage>
            
            <div className="login-form-group">
            <Field name= "confirmPassword" type="password" className="form-field" placeholder="Confirme sua Senha"></Field>
            <ErrorMessage component="span" name ="password" className = "form-error"></ErrorMessage>
          </div>
            </div>
              </div>
                </div>
                  </div>
                      </div>
                          </div>
          

          <button className="btn" type="submit"> Cadastro</button>

        </form>
      </Formik>
      
    </div>
  );
}

export default App;

