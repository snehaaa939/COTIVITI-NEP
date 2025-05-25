import { Outlet, NavLink } from "react-router-dom";

const Contact = () => {
    return (

        <>
            <header className="contact">
                <div class="container">
                    <NavLink to="/">
                        <img src="logo_footer.png" alt="cotiviti logo" id="logo" />
                    </NavLink>
                    <nav>
                        <ul id="menu">
                            <li>
                                <NavLink to="/" id="home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact" id="contactus">Contact Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.180825376873!2d85.31937357531238!3d27.711702676180092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1905d0b50847%3A0x9e277560a5a516b!2sCotiviti%20Nepal!5e0!3m2!1sen!2snp!4v1723465318818!5m2!1sen!2snp" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <section id="contact">
                <div className="container">
                    <p id="para">How can we help you</p>
                    <form>

                        <div className="group">

                            <div className="form">
                                <label for="">Your name <span>*</span></label>
                                <input type="text" id="name" required></input>
                            </div>
                            <div class="form">
                                <label for="email">Your e-mail address <span>*</span></label>
                                <input type="email" id="email" required></input>
                            </div>
                        </div>

                        <div className="group">

                            <div class="form">
                                <label for="subject">Subject <span>*</span></label>
                                <input type="text" id="subject" required></input>
                            </div>
                            <div class="form">
                                <label for="category">Category <span>*</span></label>
                                <select id="category" required>
                                    <option value="general">General information</option>
                                    <option value="general">Career</option>
                                    <option value="general">Website</option>
                                    <option value="general">Suggestion</option>
                                </select>
                            </div>
                        </div>

                        <div class="form">
                            <label for="message">Message <span>*</span></label>
                            <textarea id="message" rows="4" required></textarea>
                        </div>
                        <div class="form">
                            <label for="math-question">Math question <span>*</span></label>
                            <input type="text" id="math-question" required></input>
                            <small id="math">Solve this simle math roblem and enter the result. E.g. for 1+3, enter 4.</small>
                        </div>

                    </form>
                    <div id="btn">
                        <button>Send message</button>
                    </div>
                </div>
            </section >
        </>
    );
};
export default Contact;