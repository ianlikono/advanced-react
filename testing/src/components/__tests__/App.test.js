import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { shallow } from "enzyme";
import React from "react";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a Comment Box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
it("shows a Comment List", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
