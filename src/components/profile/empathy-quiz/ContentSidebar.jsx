import React from "react";
import * as image from "../../../resources/images";
import { useSelector } from "react-redux";
const ContentSidebar = ({ beginQuiz }) => {
  const { empathyQuizData } = useSelector((state) => state.collections);

  return (
    <div className="LessionDtlOverview p-2">
      {empathyQuizData?.records?.length === 3 && (
        <>
          {" "}
          <p>
            <strong>Next Step:</strong>{" "}
          </p>
          <p>
            Reflect on your result. Does your snack align with how you think of
            yourself? Are you surprised by your snack choice?
          </p>
          <p>&nbsp;</p>
          <p>
            If you didn’t score as high as you hoped, no worries! Everyone has
            the power to grow their empathy. Try being more mindful of how well
            you listen to others, immerse yourself in books and movies to try to
            feel what the characters are feeling, or do something kind for
            someone without expecting anything back. If you scored high, give
            yourself a pat on the back. This shows you have a big heart and a
            remarkable ability to connect with and understand others.{" "}
          </p>
          <p>&nbsp;</p>
          <p>
            No matter what you score, the journey of empathy doesn't end here!
            Empathy is like a muscle - the more you use it, the stronger it
            becomes. It's important to keep challenging yourself, listen more
            deeply, and always seek to understand others better.{" "}
          </p>
        </>
      )}
      {!beginQuiz && empathyQuizData?.records.length > 3 && (
        <>
          <p>
            <strong>Quiz Introduction:</strong>
          </p>
          <p>
            Ever wonder how well you vibe with others' feelings? That&rsquo;s
            called empathy. Empathy is like feeling a friend's happiness or
            sadness in your own heart and being there for them. It's
            understanding how someone else feels, even if you're not in their
            shoes.
          </p>
          <p>&nbsp;</p>
          <p>
            This fun quiz is kinda like finding out your snack spirit when it
            comes to empathy. Let's see what snack you turn out to be!
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>Instructions:</strong>
          </p>
          <ol>
            <li>
              <p>Read each scenario-based question and the answer choices.</p>
            </li>
            <li>
              <p>Pick the answer that sounds most like YOU.</p>
            </li>
            <li>
              <p>
                Make sure you answer each question honestly, basing your
                responses on your actual behavior and feelings, not how you
                think you 'should' answer. There are no right or wrong answers.
              </p>
            </li>
            <li>
              <p>
                At the end of the quiz, based on your responses, you'll be
                presented with one of the three snack choices that reflect and
                represent your current empathy level.
              </p>
            </li>
          </ol>
          <p>&nbsp;</p>
          <p>
            Click the <strong>&ldquo;Begin Quiz&rdquo;</strong> button to get
            started.
          </p>
        </>
      )}
      {beginQuiz && (
        <>
          <p>
            Make sure you go with your first instinct! Don't spend too long on
            each question.
          </p>
          <p>&nbsp;</p>
          <p>
            There are no judgments here. It's all about understanding yourself
            better.{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default ContentSidebar;
