/** @format */

import React, { useState, useEffect } from "react";
import * as image from "../../resources/images";
import AWS from "aws-sdk";
import { HTML_ENTITIES } from "../../utils/Regex";

const Vicky = ({ text, title, id, data, vickyPlay }, props) => {
  let [play, setPlay] = useState(false);
  const [playId, setPlayId] = useState("");
  const [textId, setTextId] = useState("");
  const [selectedTitle, setSeletedTitle] = useState("");

  AWS.config.accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY;
  AWS.config.secretAccessKey = process.env.REACT_APP_AWS_SECRET_KEY;
  AWS.config.region = process.env.REACT_APP_AWS_REGION;
  var polly = new AWS.Polly();

  useEffect(() => {
    if (textId !== id) {
      _pausePolly();
    }
  }, [id, textId]);

  let str = "";
  if (title) {
    str = title;
  }
  str += text;

  const _playPolly = () => {
    if (vickyPlay) {
      vickyPlay();
    }
    let pllyIdddd = document.getElementById("pollyId");

    if (playId !== pllyIdddd) {
      setPlay(false);
    }

    let textTypeItem = "ssml";
    let k = 1;
    let textdata = str.replace(/<li>|<ol>/g, function (x) {
      if (x == `<ol>`) {
        k = 1;
        return "";
      }
      return k++;
    });

    let vickyString =
      "<speak>" +
      textdata
        .replace(/<p>&nbsp;<\/p>/g, "") // Remove empty paragraphs
        .replace(HTML_ENTITIES, "") // Remove HTML entities if needed
        .replace(/<p>/g, "") // Remove opening p tags
        .replace(/<\/p>/g, "<break time='500ms'/>") // Replace closing p tags with breaks
        .replace(/<span[^>]*>/g, "") // Remove opening span tags
        .replace(/<\/span>/g, "") // Remove closing span tags
        .replace(/<i[^>]*>/g, "") // Remove opening i tags
        .replace(/<\/i>/g, "") // Remove closing i tags
        .replace(/<h4[^>]*>/g, "") // Remove opening h4 tags
        .replace(/<\/h4>/g, "") // Remove closing h4 tags
        .replace(/<strong[^>]*>(.*?)<\/strong>/g, "$1") // Extract content from strong tags
        .replace(/<\/li>/g, "<break time='400ms'/>") // Replace list items with breaks
        .replace(/<\/ol>/g, "") // Remove ordered list tags
        .replace(/<div[^>]*>/g, "") // Remove opening div tags
        .replace(/<\/div>/g, "") // Remove closing div tags
        .replace(/<img[^>]*>/g, "") // Remove image tags
        .replace(/<a[^>]*>(.*?)<\/a>/g, "$1") // Extract content from anchor tags
        .replace(/<em>/g, "") // Remove opening em tags
        .replace(/<\/em>/g, "") // Remove closing em tags
        .replace(/<b>/g, "") // Remove opening b tags
        .replace(/<\/b>/g, "") // Remove closing b tags
        .replace(/<br\s*\/?>/g, "<break time='400ms'/>") // Replace line breaks with breaks
        .replace(/<ul[^>]*>/g, "") // Remove opening ul tags
        .replace(/<\/ul>/g, "") // Remove closing ul tags
        .trim() +
      "</speak>";

    var params = {
      OutputFormat: "mp3",
      Text: vickyString,
      TextType: textTypeItem,
      VoiceId: "Ruth",
      Engine: "neural",
    };

    polly.synthesizeSpeech(params, function (err, data) {
      if (err) {
        setPlay(false);
      } else {
        setPlay(true);
        var uInt8Array = new Uint8Array(data.AudioStream);
        var arrayBuffer = uInt8Array.buffer;
        var blob = new Blob([arrayBuffer], { type: `audio/mpeg` });
        var audio = document.getElementById("pollyId");
        var url = webkitURL.createObjectURL(blob);
        setPlayId(url);
        setTextId(id);
        setSeletedTitle(title);
        audio.src = url;
        audio.play();
        audio.onloadedmetadata = function () {
          let timer = audio.duration * 1001;
          setTimeout(
            function () {
              setPlay(false);
            }.bind(this),
            timer
          );
        };
      }
    });
  };

  const _pausePolly = () => {
    var audio = document.getElementById("pollyId");
    audio.pause();
    setPlay(false);
  };

  useEffect(() => {
    if (play) {
      data?.setPlayVideo(false);
    }
  }, [play]);

  return (
    <React.Fragment>
      {" "}
      <div className='d-none'>
        <video controls id='pollyId' src=''></video>
      </div>
      {play ? (
        <span key={Math.random()} className='AudioIcon speakerspeek'>
          <img
            src={image.speakerStart}
            alt=''
            onClick={() => _pausePolly()}
            className='pointer'
          />
         <span className="speaker_effect">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </span>
      ) : (
        <span key={Math.random()} className='AudioIcon '>
          <img
            src={image.Audioicon}
            alt='icon'
            onClick={() => _playPolly()}
            className='pointer'
          />
           
        </span>
      )}
    </React.Fragment>
  );
};

export default Vicky;
