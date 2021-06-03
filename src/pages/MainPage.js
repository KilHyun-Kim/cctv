import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { API } from '../api/API';
import testImg from '../images/1.jpg';
import axios from 'axios';

const Wrap = styled.div``;

const MainPage = () => {
  const [selectedImg, isSelectedImg] = useState(null);
  const handleClick = useCallback(async () => {
    const result = await API.post(
      `http://164.125.190.101:3840/api/upload/image/`,
    );
    // console.log(e.target.files[0]);
    // const option = {
    //   url: '',
    //   method: 'POST',
    // };

    //   {
    //     "url": "http://164.125.190.101:3840/api/upload/image",
    //     "raw_url": "http://164.125.190.101:3840/api/upload/image/",
    //     "method": "post",
    //     "files": {
    //         "file": "1.jpg"
    //     },
    //     "auth": {
    //         "user": "pashi",
    //         "password": "pashi12345"
    //     }
    // }
    // axios({
    //   url: 'http://164.125.190.101:3840/api/upload/image/',
    //   method: 'post',

    //   auth: {
    //     id: 'pashi',
    //     password: 'pashi12345',
    //   },
    //   files: {
    //     file: testImg,
    //   },
    // }).then((response) => console.log(response));
    // axios(option).then((response) => console.log(response));

    // const test = await API.post(`/upload/image/`, e.target.files[0]);
    // console.log(test);
  }, []);
  // const formik = useFormik({
  //   initialValues: {
  //     imgFile: null,
  //   },
  //   onSubmit: (values) => {
  //     console.log(JSON.stringify(values));
  //   },
  // });

  return (
    <>
      {/* <input
        type="file"
        accept="image/jpeg, image/jpg"
        onChange={(e) => handleChange(e)}
      /> */}
      <button onClick={handleClick}>테스트 </button>
    </>
    // <form onSubmit={formik.handleSubmit}>
    //   <label htmlFor="img">이미지 입력</label>
    //   <input
    //     id="img"
    //     name="imgFile"
    //     type="file"
    //     onChange={formik.handleChange}
    //     value={formik.values.imgFile}
    //   />
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default MainPage;
