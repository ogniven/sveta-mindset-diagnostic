# SVETA MINDSET Diagnostic Site

## Project purpose

This repository contains the website and interactive mini-diagnostic for the SVETA MINDSET project.

The website is not a generic psychology landing page and not a personality test.

Its purpose is to help a visitor explore one specific situation:

"I already understand what I want and roughly know what I need to do, but I keep making decisions that leave my life largely unchanged."

The core diagnostic hypothesis is:

A new goal may conflict with an important way a person is accustomed to defining themselves. Old behavior may therefore persist because it preserves something psychologically important: a familiar self-image, role, relationship, place among others, sense of control, professional identity, approval, predictability, or belonging.

The mini-diagnostic must NOT claim to determine a person's true identity, diagnosis, personality type, or "Dominant Identifier".

It generates only a working hypothesis that can be explored further.

---

## Primary audience

Intelligent, reflective, functional adults who:

- already understand a lot about themselves;
- often know what they want;
- often know the next reasonable action;
- still repeat decisions that keep them in an old scenario;
- are interested in work, money, business, professional growth, visibility, leadership, relationships, or boundaries;
- dislike simplistic psychology, motivational clichés, and pseudoscientific tests.

The tone must respect the reader's intelligence.

---

## Core SVETA MINDSET principle

Do not stop at the visible problem.

Ask what the current behavior preserves, protects, avoids, or makes possible.

A visible problem may be:

- "I cannot raise my price."
- "I cannot delegate."
- "I am afraid to become visible."
- "I keep postponing leaving."
- "I know I should sell but do not."
- "I cannot say no."

The site should help the visitor investigate a deeper question:

"What does my old way of acting allow me to continue believing about myself?"

---

## Scope discipline

Follow the approved specification in `docs/SITE_SPEC.md`.

Do NOT:

- invent new marketing copy;
- rewrite approved Russian copy unless explicitly asked;
- add new psychological theories;
- add new diagnostic categories without approval;
- turn the diagnostic into a personality test;
- assign psychological diagnoses;
- present hypotheses as facts;
- claim to identify a person's "true self";
- claim to determine a Dominant Identifier automatically;
- add generic self-help language;
- add motivational clichés;
- add testimonials that were not provided;
- invent client cases;
- invent credentials, statistics, results, prices, or guarantees;
- add sections just because they are common on landing pages;
- add features that were not requested;
- add a backend in the MVP;
- introduce a framework or library unless there is a concrete need.

If the specification is ambiguous, choose the simplest implementation and clearly report the ambiguity.

---

## Writing rules

The site's primary language is Russian.

Approved Russian copy must be preserved exactly unless the user explicitly requests editing.

The writing style should be:

- intelligent but easy to read;
- conversational;
- concrete;
- psychologically careful;
- non-diagnostic;
- without bureaucratic language;
- without generic AI wording;
- without excessive explanation;
- without motivational slogans.

Do not simplify the idea itself.
Simplify the entrance into the idea.

The reader should often experience:

"Чёрт. Возможно, я всё это время смотрела не туда."

---

## Diagnostic integrity

The mini-diagnostic explores the chain:

Goal
→ required action
→ psychological cost/threat
→ important self-description
→ feared loss of that self-description
→ habitual protective behavior
→ what the old behavior preserves
→ working hypothesis

The result must be framed as a hypothesis.

Preferred wording:

- "В ваших ответах есть повторяющийся мотив."
- "Вот гипотеза, которую имеет смысл проверить."
- "Несколько ваших ответов сходятся в одной точке."
- "Пока данных недостаточно, чтобы связывать ситуацию именно с этим конфликтом."

Forbidden wording:

- "Мы определили вашу истинную причину."
- "Ваш тип личности..."
- "Ваш Доминирующий идентификатор..."
- "У вас 87% конфликта идентичности."
- "Этот тест доказал..."
- "Вы саботируете успех потому что..."

No fake percentages or pseudo-psychometric scoring may be shown to users.

Internal rule-based scoring may be used only to choose appropriate result language.

---

## Conflict centers

The implementation may use these internal content categories:

1. GOODNESS
   Approval, being good, non-conflict, not imposing.

2. AUTONOMY
   Strength, independence, "I handle everything myself".

3. PROFESSIONAL
   Professional identity and conflict with selling, visibility, leadership, or new roles.

4. VISIBILITY
   Modesty, visibility, taking space, fear of appearing arrogant or "too much".

5. CONTROL
   Predictability, certainty, analysis, guarantee, avoiding action without full control.

6. BELONGING
   Familiar place among others, relationships, group belonging, fear of outgrowing one's environment.

These are NOT personality types and must never be presented to users as types.

If two centers are similarly supported, show a mixed/ambiguous result rather than forcing one answer.

---

## Evidence strength

Internally, the diagnostic may classify answer consistency as:

- weak
- moderate
- strong
- mixed

These labels describe consistency of answers, NOT the person.

Never display numeric psychological scores.

For weak evidence, the site must be willing to say that the current hypothesis is not sufficiently supported.

For mixed evidence, the site must say that more than one mechanism may be present and that an automatic diagnostic should not pretend to know which is primary.

---

## MVP technical constraints

Build a simple static website suitable for GitHub Pages.

Prefer:

- HTML
- CSS
- vanilla JavaScript

Avoid unnecessary frameworks and dependencies.

The MVP should work without a backend.

Requirements:

- mobile-first;
- excellent usability on Android and iPhone;
- responsive desktop layout;
- fast loading;
- accessible controls;
- readable typography;
- clear focus states;
- keyboard accessibility where practical;
- semantic HTML;
- no horizontal scrolling;
- no unnecessary animation;
- no autoplay media;
- no popups before the diagnostic result;
- no forced email collection before value is delivered.

---

## UX rules

The diagnostic should feel like a guided investigation, not a questionnaire.

Use:

- one primary question per screen;
- visible progress;
- short transitions between questions;
- large tap targets on mobile;
- ability to go back without losing previous answers;
- clear distinction between single-choice and multi-choice questions;
- free-text fields only where they materially improve personalization.

The visitor should receive the result before being asked to submit an application.

Do not put the session sale before the diagnostic insight.

The intended journey is:

Threads / direct link
→ website
→ recognition
→ mini-diagnostic
→ personalized hypothesis
→ observation question
→ optional diagnostic session application

---

## CTA rules

Primary CTA after the result:

"Разобрать мою ситуацию"

Do not use aggressive sales language.

The diagnostic session is positioned as a deeper investigation, not as confirmation of the website result.

Important message:

"На встрече мы не обязаны подтвердить гипотезу сайта."

The goal is to discover what actually organizes the person's decisions, not to defend a beautiful theory.

---

## Privacy

Do not automatically send or expose free-text psychological answers to third-party services.

For the MVP, prefer keeping diagnostic answers in the browser unless explicitly required otherwise.

Do not implement analytics that capture sensitive free-text answers.

If analytics are added later, track only necessary product events and non-sensitive categories unless explicit consent is designed.

Do not expose secrets, API keys, tokens, or private configuration in the repository.

---

## Development workflow

Before making substantial changes:

1. Read this `AGENTS.md`.
2. Read `docs/SITE_SPEC.md` completely.
3. Inspect the existing repository.
4. State briefly what you plan to change.
5. Make the minimum changes necessary.
6. Test the result.
7. Check mobile behavior.
8. Report:
   - what changed;
   - what was tested;
   - any assumptions made;
   - any unresolved issues.

Do not redesign approved content on your own.

Do not replace working code merely for stylistic reasons.

Prefer small, reviewable changes over unnecessary rewrites.

---

## Definition of success

A visitor should not leave thinking:

"I learned my psychological type."

They should leave thinking:

"I thought my problem was that I couldn't make myself act. Now I see a specific place where my old decision may be preserving something important about who I believe I am."

The paid session becomes relevant when the visitor thinks:

"I want to understand what is actually happening in my specific situation."
