import React from 'react';
import './NotFound.css'
import {Link} from 'react-router-dom'
export default class NotFound extends React.Component {
    render() {
        return (
            <div className="notfound">
                <div className={"error"}>
                    <h1>
                        Error 404
                    </h1>
                    <p>
                        Упс...Что-то пошло не так:(
                    </p>
                    <Link to={"/"}>
                        <button>
                            Вернуться обратно
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}