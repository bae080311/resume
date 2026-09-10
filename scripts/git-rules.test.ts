import assert from "node:assert/strict";
import test from "node:test";
import { createBranchName, isProtectedBranch } from "./git-rules";

test("허용된 종류와 kebab-case 주제로 브랜치 이름을 만든다", () => {
  assert.equal(createBranchName("feat", "contact-section"), "feat/contact-section");
});

test("허용되지 않은 브랜치 종류를 거부한다", () => {
  assert.throws(() => createBranchName("feature", "contact-section"));
});

test("잘못된 브랜치 주제를 거부한다", () => {
  assert.throws(() => createBranchName("feat", "Contact Section"));
  assert.throws(() => createBranchName("feat", "contact_section"));
});

test("기본 브랜치를 보호 브랜치로 판별한다", () => {
  assert.equal(isProtectedBranch("main"), true);
  assert.equal(isProtectedBranch("master"), true);
  assert.equal(isProtectedBranch("feat/contact-section"), false);
});
