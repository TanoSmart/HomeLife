import '../../css/App.css';
import logo from '../../assets/logo.png';
import { useState } from "react";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!validateEmail(email)) {
            alert("Email inválido");
            return;
        }

        try {

            const res = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    senha
                })
            });

            const data = await res.json();

            if (data.success) {

                localStorage.setItem("usuario", JSON.stringify(data.user));

                alert("Login feito com sucesso");

                window.location.href = "/cliente";

            } else {

                alert("Email ou senha inválidos");

            }

        } catch (error) {

            console.log(error);
            alert("Erro no servidor");

        }
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="main">

            <div className="w-full h-full bg-blue-600 absolute z-10 opacity-10"></div>

            <div className="flex justify-center w-full h-full items-center bg-blue-600 absolute z-20">

                <div className="bg-white p-20 max-w-md w-full rounded-2xl text-slate-900 ">
                    <div className='flex items-center justify-center'>
                        <img src={logo} className='w-24' alt="" />
                        <h1 style={{ padding: '30px', paddingLeft: 0 }} className="text-2xl text-center font-bold text-slate-900">
                            HomeLife
                        </h1>
                    </div>


                    <form
                        className="flex flex-col justify-center items-center gap-6 p-4 w-full"
                        onSubmit={handleLogin}
                    >

                        <div className="campo flex flex-col">
                            <label htmlFor="login">E-mail</label>

                            <input
                                type="email"
                                id="login"
                                placeholder="exemplo@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-80 h-10 p-3 rounded-xl border"
                                required
                            />
                        </div>

                        <div className="campo">

                            <label htmlFor="senha">Senha</label>

                            <div className="flex flex-row w-80 h-10">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="senha"
                                    placeholder="••••••••"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    className="w-full p-3 rounded-xl border"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    className="px-3 mx-3 w-12 rounded-xl bg-slate-900 text-white"
                                >
                                    👁
                                </button>

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-center px-6 py-2 w-80 h-10 rounded-full hover:bg-blue-700 text-white"
                        >
                            Acessar conta
                        </button>

                    </form>

                    <div className="text-center mt-4">

                        <a href="/register">
                            Criar conta
                        </a>

                        <br />

                        <a href="#">
                            Esqueceu a senha?
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SignIn;