import Header from "../components/Header"
import '../css/Signup.css'
import { Link } from "react-router-dom";
export default function SignUpPage() {
    return (
        <div className="gradient ">
            <div className="form_container ">
                <form action=""  >
                    <h1 className="text-center mb-4 size fs-1">Регистрация</h1>
                    <div className=" input_box mb-3">
                        {/* <label htmlFor="text">Имя</label> */}
                        <input type="text" className="form-control" placeholder="Имя" required />
                    </div>
                    <div className=" input_box mb-3">
                        {/* <label htmlFor="text">Фамилия</label> */}
                        <input type="text"  className="form-control" placeholder="Фамилия" required />
                    </div>
                    <div className="input_box mb-3">
                        {/* <label htmlFor="text">Табельный номер</label> */}
                        <input type="text" className="form-control" placeholder="Табельный номер" required />
                    </div>
                    <div className="input_box mb-3">
                        {/* <label htmlFor="password">Пароль</label> */}
                        <input type="password" className="form-control" placeholder="Пароль" required />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                    </div>
                    <div className="link text-end mt-3">
                        <p>Есть аккаунт?  <Link to="login">Войти</Link></p>
                    </div>
                </form>

            </div>
        </div>

    )
}