import { Routes, Route, Switch, Redirect } from "react-router-dom";
import {
  Home,
  Login,
  Profile,
  Test,
  LienHe,
  PayPost,
  Details,
  LoginAdmin,
} from "./containers/public";
import { path } from "./ultils/constant";
import {
  CreatePost,
  ManagePost,
  EditAccount,
  System,
  DepositHistory,
} from "./containers/system";
import React, { useCallback, useState, useEffect } from "react";
import * as actions from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
//npm i react-router-dom --save

import Layout from "./components/shared/Layout";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import EditPost from "./pages/EditPost";


function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrent());
    }, 1000);
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
  }, []);


  // const {categories} = useSelector(state => state.app)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //     dispatch(actions.getCategories())

  // }, [actions.getCategories])

  // useEffect(() => {
  //     console.log("Categories :", categories)
  // }, [categories])

  return (
    <div class="h-screen w-creen">
      {/* <Sidebar /> */}

      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.PROFILE} element={<Profile />} />
        </Route>

        <Route path={path.LOGIN_ADMIN} element={<LoginAdmin />} />
        <Route path={path.ADMIN} element={<Layout />}>
          
          <Route index element={<Dashboard />} />
          <Route path={path.PRODUCT} element={<Products />} />
          <Route path="products/editpost" element={<EditPost />}/>

          <Route path="register" element={<Register />} />
        </Route>

        <Route path={path.DETAILS_POST_TITLE_POSTID} element={<Details />} />
        <Route path={path.DETAILS_ALL} element={<Details />} />
        <Route path={path.ADMIN} element={<test />} />

        <Route path={path.SYSTEM} element={<System />}>
          <Route path={path.CREATE_POST} element={<CreatePost />}>
            {/* <Route path={path.PAY_POST} element={<PayPost />} /> */}
          </Route>
          <Route path={path.MANAGE_POST} element={<ManagePost />} />
          <Route path={path.EDIT_ACCOUNT} element={<EditAccount />} />
          <Route path={path.DEPOSITHISTORY} element={<DepositHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
