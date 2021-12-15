import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import PagesPromotionSearch from "./promotion/search/Search";
import PagesPromotionForm from "./promotion/Form/Form";

const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PagesPromotionSearch/>} />
                <Route path="/create" element={<PagesPromotionForm/>} />
                <Route path="/edit/:id" element={<PagesPromotionForm/>} />
            </Routes>
        </Router>
    );
};

export default Root;