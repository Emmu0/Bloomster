import React from "react";
import * as image from "../../../resources/images";
import { ShimmerCategoryList } from "react-shimmer-effects";
import { useSelector } from "react-redux";

const EmpathyResult = ({ data }) => {
  const { loggedInUser } = useSelector((state) => state.collections);

  let beginning = [];
  let remaining = [];
  if (loggedInUser?.role?.name !== "PROVIDER") {
    data?.records.length > 0 &&
      data?.records.map((vl) => {
        if (vl.id == data?.recordId) {
          beginning.push(vl);
        } else {
          remaining.push(vl);
        }
      });
  } else {
    beginning.push({
      imageUrl: image.chipspack,
      description: `<p><strong>Bag of Chips (Low Empathy):</strong>
                            Sometimes you pick stuff cause it's quick and easy,
                            like grabbing a bag of chips when you're hungry.
                            It's not that you don't care about others; maybe
                            you're just in a phase where you're figuring things
                            out for yourself.
                          </p>
                          <p>
                            <strong>Friendly Tip:</strong> Try slowing down and
                            really listening to your friends now and then. It's
                            kinda cool when you really get to know them better.
                            Little things, like asking about their day or
                            remembering their favorite drink, can make a big
                            difference.
                          </p>`,
    });
    remaining.push({
      imageUrl: image.cockiesimg,
      description: ` <p>
                          <strong>Homemade Cookies (Medium Empathy):</strong>
                          Nice! You're like those cookies baked with care and
                          love. You often get how your friends feel and want to
                          help, just like making cookies for a friend who's
                          down. But sometimes, some tiny details might zip past
                          you.
                        </p>
                        <p>
                          <strong>Friendly Tip:</strong> Keep it up! Try joining
                          a group or club at school to practice listening and
                          understanding even better. Little things like helping
                          out or just chatting can help you connect even deeper
                          with others.
                        </p>`,
    });
    remaining.push({
      imageUrl: image.snacksbag,
      description: `<p>
                          <strong>
                            Personalized Snack Box (High Empathy):
                          </strong>
                          Amazing! This isn’t just any snack box. It's YOUR
                          snack box. Picking all the right snacks takes time and
                          thought, just like someone with high empathy doesn't
                          just do whatever takes the least effort to understand
                          and listen to how someone feels.
                        </p>
                        <p>
                          <strong>Friendly Tip:</strong> Remember, being super
                          understanding is great, but take some 'me-time' too!
                          And hey, teach others how to be as understanding as
                          you, whether in group projects or buddy programs. Just
                          don't forget to chill and recharge.
                        </p>`,
    });
  }

  return (
    <>
      {data ? (
        <div className="smartquizwrapper">
          <div className="smqzQueslist">
            <div className="signupType mt-3 mb-3">
              <div>
                <div className="empathy_header">
                  <h4>Awesome Work!</h4>
                  <p>See what snack best reflects your level of empathy </p>
                  <div className="flex chipsback">
                    <img src={beginning[0]?.imageUrl} />
                    <span
                      className="w-100"
                      dangerouslySetInnerHTML={{
                        __html: beginning[0]?.description,
                      }}
                    />
                  </div>
                </div>
                <div className="checkout_header mt-3">
                  <h4>Check out other snack types!</h4>
                </div>

                <hr className="empathyborderstyle"></hr>

                <div className="flex chipsback">
                  <span
                    className="w-100"
                    dangerouslySetInnerHTML={{
                      __html: remaining[0]?.description,
                    }}
                  />

                  <img src={remaining[0]?.imageUrl} />
                </div>

                <hr></hr>

                <div className="flex chipsback mt-3">
                  <img src={remaining[1]?.imageUrl} />
                  <span
                    className="w-100"
                    dangerouslySetInnerHTML={{
                      __html: remaining[1]?.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
      )}
    </>
  );
};

export default EmpathyResult;
