import React from "react";

function SearchForm(props) {
    return(
        <form>
            <div>
                <input
                  onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an employee"
                    id="search"
                />
            </div>
        </form>
    )

}

export default SearchForm;