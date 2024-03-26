import React, { createContext, useEffect, useState } from "react";
import Footer from "../../containers/public/Footer";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import Fillter from "../observerPattern/Fillter";
import { useSearchParams } from "react-router-dom";
import LocalStorageManager from "./LocalStorageManager";
import Pagination from "../../containers/public/Pagination";
import { ComplexNavbarDetail } from "../../containers/public/favoriteBar";
import imageIntro from "../../assets/intro4.jpg";
import FavoriteList from "./FavoriteList";

export const ContextRegiter = createContext();
export const Context = createContext();

const Favorite = () => {
  const [params] = useSearchParams();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
   
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
    dispatch(actions.getCategories());
  }, []);

  useEffect(() => {
    // Trạng thái mới của isLoginPopupOpen đã thay đổi ở đây
  }, [isLoginPopupOpen]);

  const { categories } = useSelector((state) => state.app);

  

  useEffect(() => {
    dispatch(actions.getCategories());
  }, [dispatch]);

  // Tạo instance của LocalStorageManager
  const localStorageManager = LocalStorageManager.getInstance();
  const favoriteListInstance = localStorageManager.getFavorites();

  return (
    <ContextRegiter.Provider value={[isRegisterPopupOpen, setIsRegisterPopupOpen]}>
      <Context.Provider value={[isLoginPopupOpen, setIsLoginPopupOpen]}>
        <div style={styles.container} className="z-50 absolute">
          <div className={isRegisterPopupOpen ? "fixed inset-0 backdrop-blur-sm z-30" : ""}>
            <div className={isLoginPopupOpen ? "fixed inset-0 backdrop-blur-sm z-30" : ""}>
              <ComplexNavbarDetail />
            </div>
          </div>

          <div style={styles.body}>
            <div style={styles.intro}>
              <img style={styles.imageIntro} src={imageIntro} alt="Intro" />
            </div>
            <div style={styles.search1}>
              <Fillter />
            </div>
            <div>
              <FavoriteList favorites={favoriteListInstance} />
              <Pagination />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </Context.Provider>
    </ContextRegiter.Provider>
  );
};

const styles = {
  container: {
    position: "absolute",
    flexDirection: "column",
    height: "100vh",
  },
  body: {
    backgroundColor: "white",
    flex: "90%",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  intro: {
    flex: "10%",
  },
  search1: {
    position: "absolute",
    top: "350px",
    right: "400px",
    left: "400px",
  },
  imageIntro: {
    position: "relative",
    width: "100%",
    height: "670px",
  },
};

export default Favorite;
