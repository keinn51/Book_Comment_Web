import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  Controller,
  Slides,
  SlidesViewer,
  Background,
  ImgWidth,
  ImgLeftRighMargin,
  TopBox,
  SlidesContainer,
} from './styles';
import MyBookImg from '@components/MyBookImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { dbService, authService } from '@utils/fbase';
import { getDoc, doc } from 'firebase/firestore';
import GetDetailedName from '@utils/GetDetailedName';

const ratingSection = ['0~1', '1~2', '2~3', '3~4', '4~5'];

function MybooksSlider() {
  const [trans, setTrans] = useState(0);
  const [mybooks, setMybooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState({});
  const [editYearList, setEditYearList] = useState([]);

  const [categoryListOpen, setCategoryListOpen] = useState(false);
  const [ratingListOpen, setRatingListOpen] = useState(false);
  const [yearListOpen, setYearListOpen] = useState(false);

  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + (ImgWidth * 4 + ImgLeftRighMargin * 6));
    console.log(ImgLeftRighMargin, ImgWidth);
  };

  const onClickR = () => {
    if (trans <= -(((mybooks.length - 4) / 4) * (ImgWidth * 4 + ImgLeftRighMargin * 6))) {
      return;
    }
    setTrans((current) => current - (ImgWidth * 4 + ImgLeftRighMargin * 6));
  };

  const getBookInfo = async () => {
    const dbBooks = await getDoc(doc(dbService, 'UserEval', authService.currentUser.uid));

    setMybooks(Object.values(dbBooks.data()));
  };

  const getCategoryList = async () => {
    const CTBooks = await getDoc(doc(dbService, 'UserEval', authService.currentUser.uid));

    setCategoryList(CTBooks.data());
    setLoading(false);
  };

  const onClickCateorySort = useCallback((e) => {
    // console.log(e.target.innerText);
    setMybooks((prev) => prev.filter((elem) => GetDetailedName(elem.categoryId) === e.target.innerText));
  }, []);

  const onClickRatingSort = useCallback((e) => {
    let tempArr = e.target.innerText?.match(/(.+)~(.+)/);
    if (tempArr?.length > 2) {
      setMybooks((prev) => prev.filter((elem) => elem.rating >= tempArr[1] && elem.rating <= tempArr[2]));
    }
  }, []);

  const onClickYearSort = (e) => {
    // console.log(e.target.innerText);
    setMybooks((prev) =>
      prev.filter((elem) => new Date(elem.editDate).getFullYear().toString() === e.target.innerText),
    );
  };

  const onClickCataoryToggle = useCallback(() => {
    setCategoryListOpen(true);
    setRatingListOpen(false);
    setYearListOpen(false);
  }, []);

  const onClickRatingToggle = useCallback(() => {
    setRatingListOpen(true);
    setCategoryListOpen(false);
    setYearListOpen(false);
  }, []);

  const onClickYearToggle = useCallback(() => {
    setYearListOpen(true);
    setCategoryListOpen(false);
    setRatingListOpen(false);
  }, []);

  const deleteSameElem = useCallback((arr) => {
    let result = [];
    new Set(arr).forEach((e) => result.push(e));
    return result.sort((a, b) => b - a);
  }, []);

  useEffect(() => {
    setLoading(true);
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      if (isLoggedIn) {
        getBookInfo();
        getCategoryList();
      }
    });
  }, [isLoggedIn]);

  useEffect(() => {
    if (mybooks.length > 0) {
      mybooks.forEach((elem) => {
        if (!editYearList.includes(new Date(elem.editDate).getFullYear())) {
          setEditYearList((prev) => [new Date(elem.editDate).getFullYear(), ...prev]);
        }
      });
    }
  }, [editYearList, mybooks]);

  // console.log(categoryList);

  return loading ? (
    <div>loading..</div>
  ) : (
    <>
      <TopBox>
        <div className="upperContainer">
          <div className="title">My books</div>
          <div className="classify">
            <span onClick={onClickCataoryToggle}>Category</span>
            <span onClick={onClickRatingToggle}>Rating</span>
            <span onClick={onClickYearToggle}>Year</span>
          </div>
        </div>
        {/* category temp! */}
        {categoryListOpen ? (
          <div className="classifyModal">
            {categoryList
              ? Object.entries(categoryList).map((name) => {
                  return GetDetailedName(name[1][`categoryId`]) !== '' ? (
                    <div className="content" onClick={onClickCateorySort}>
                      <div className="contentInner">
                        <div>{GetDetailedName(name[1][`categoryId`])}</div>
                      </div>
                    </div>
                  ) : null;
                })
              : null}
          </div>
        ) : ratingListOpen ? (
          <div className="classifyModal">
            {ratingSection.map((elem) => {
              return (
                <div className="content" onClick={onClickRatingSort}>
                  <div className="contentInner">
                    <div>{elem}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : yearListOpen ? (
          <div className="classifyModal">
            {deleteSameElem(editYearList)?.map((year) => {
              return (
                <div className="content" onClick={onClickYearSort}>
                  <div className="contentInner">
                    <div>{year}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </TopBox>

      <SlidesContainer>
        <SlidesViewer>
          <Slides trans={trans} bookCount={mybooks.length}>
            {mybooks?.map((book) => {
              return (
                <MyBookImg
                  key={book.id}
                  title={book.title}
                  coverImg={book.coverLargeUrl}
                  isbn={book.isbn}
                  shortcomment={book.shortComment}
                  rating={book.rating}
                />
              );
            })}
          </Slides>
        </SlidesViewer>
        <Controller>
          <button className="Left" onClick={onClickL}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="Right" onClick={onClickR}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </Controller>
      </SlidesContainer>
    </>
  );
}

export default MybooksSlider;
