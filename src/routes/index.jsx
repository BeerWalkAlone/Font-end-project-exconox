import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from "./Home";
import Project from './project'
import Contractus from './contractus'
import Aboutus from './aboutus'
import Story from './story'
import Navabar from "../components/Navabar";
import SignInDialog from "../components/SignInDialog";
import SignUpDiag from "../components/SignUpDiag";
import Profile from "./Profile";
import axios from "axios";

import LuangPrabang from '../Detail-project/LuangPrabang'
import VangVieng from '../Detail-project/vang vieng'
import Vientiane from '../Detail-project/Vientiane'
import XiengKhouang from '../Detail-project/Xieng khouang'
import WatXiengThong from "../Detail-project/WatXiengThong";
import VatPhou from "../Detail-project/Vat Phou";
export default function Index() {
    const [openSignInDiag, setopenSignInDiag] = useState(false)
    const [opensignUpDiag, setopensignUpDiag] = useState(false)
    const [isloginIn, setisloginIn] = useState(false)

    useEffect(() => {
        axios({
            url: window.$api + '/refresh',
            method: 'post',
            withCredentials: true
        }).then(res => {
            switch (res.data.status) {
                case 200:
                    setisloginIn(true)
                    break;

                default:
                    console.log(res.data)
                    break;
            }
        })
    }, [])


    const handleCloseSignInDiag = () => {
        setopenSignInDiag(false)
    }

    const handleCloseSignUpDiag = () => {
        setopensignUpDiag(false)
    }
    return (
        <>
            <BrowserRouter>
                <Navabar setopenSignInDiag={setopenSignInDiag} setopensignUpDiag={setopensignUpDiag} isloginIn={isloginIn} />
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/about-us" element={<Aboutus />} />
                    <Route path="/contractus" element={<Contractus />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/profile" element={<Profile />} />

                    <Route path="/luangPrabang" element={<LuangPrabang />} />
                    <Route path="/vangVieng" element={<VangVieng />} />
                    <Route path="/vientiane" element={<Vientiane />} />
                    <Route path="/xiengKhouang" element={<XiengKhouang />} />
                    <Route path="/watxiengthong" element={<WatXiengThong />} />
                    <Route path="/vutphou" element={<VatPhou />} />
                </Routes>
                <SignInDialog
                    open={openSignInDiag}
                    handleCloseSignInDiag={handleCloseSignInDiag}
                    setopenSignInDiag={setopenSignInDiag}
                    setopensignUpDiag={setopensignUpDiag}
                    setisloginIn={setisloginIn}
                />
                <SignUpDiag
                    openUp={opensignUpDiag}
                    handleCloseSignUpDiag={handleCloseSignUpDiag}
                    setopenSignInDiag={setopenSignInDiag}
                    setopensignUpDiag={setopensignUpDiag}
                />

            </BrowserRouter></>
    )
}
