// Browser-memory diagnostic; approved copy and fixed rules from SITE_SPEC v1.1.
(() => {
'use strict';
const options = {
  "goal_area": [
    [
      "money",
      "Деньги / доход / цена"
    ],
    [
      "career",
      "Работа / карьера"
    ],
    [
      "business",
      "Бизнес / масштаб"
    ],
    [
      "visibility",
      "Блог / публичность"
    ],
    [
      "relationships",
      "Отношения"
    ],
    [
      "boundaries",
      "Границы / способность отказывать"
    ],
    [
      "other",
      "Другое"
    ]
  ],
  "action_clarity": [
    [
      "action_clear",
      "Я довольно хорошо понимаю, что надо сделать."
    ],
    [
      "action_partial",
      "Понимаю направление, но не конкретный шаг."
    ],
    [
      "action_unknown",
      "На самом деле вообще не знаю, что делать."
    ]
  ],
  "threat": [
    [
      "rejection",
      "Мне могут отказать."
    ],
    [
      "disapproval",
      "Кто-то будет мной недоволен."
    ],
    [
      "arrogant",
      "Я могу показаться наглой / самоуверенной."
    ],
    [
      "greedy",
      "Я могу показаться корыстной."
    ],
    [
      "evaluation",
      "Меня начнут гораздо сильнее оценивать."
    ],
    [
      "dependence",
      "Я буду сильнее зависеть от других."
    ],
    [
      "responsibility",
      "Мне придётся отвечать за более серьёзный результат."
    ],
    [
      "lose_place",
      "Я могу потерять привычное место среди людей."
    ],
    [
      "relationship_change",
      "Люди могут начать относиться ко мне иначе."
    ],
    [
      "admit_desire",
      "Мне придётся признать, что я действительно хочу большего."
    ],
    [
      "other",
      "Другое."
    ]
  ],
  "self_primary": [
    [
      "good_person",
      "Я хороший человек."
    ],
    [
      "professional",
      "Я профессионал."
    ],
    [
      "strong",
      "Я сильный человек."
    ],
    [
      "independent",
      "Я самостоятельный человек."
    ],
    [
      "modest",
      "Я скромный человек."
    ],
    [
      "not_pushy",
      "Я не навязываюсь другим."
    ],
    [
      "non_conflict",
      "Я неконфликтный человек."
    ],
    [
      "reasonable",
      "Я разумный и адекватный человек."
    ],
    [
      "handle_myself",
      "Я человек, который справляется сам."
    ],
    [
      "chosen",
      "Я человек, которого выбирают."
    ],
    [
      "money_not_main",
      "Я не тот человек, для которого деньги важнее всего."
    ],
    [
      "other",
      "Мне важно другое."
    ]
  ],
  "self_loss": [
    [
      "lose_self_respect",
      "Я стану хуже в собственных глазах."
    ],
    [
      "lose_respect",
      "Другие будут меньше меня уважать."
    ],
    [
      "identity_confusion",
      "Я перестану понимать, кто я."
    ],
    [
      "loss_of_control",
      "Кто-то или что-то получит надо мной слишком много власти."
    ],
    [
      "neediness",
      "Мне придётся признать свою зависимость или нуждаемость."
    ],
    [
      "loss_of_belonging",
      "Я могу потерять привычное место среди других."
    ],
    [
      "unclear_but_important",
      "Я не знаю. Просто мне очень не хочется терять это про себя."
    ],
    [
      "other",
      "Свой вариант."
    ]
  ],
  "protection_behavior": [
    [
      "postpone",
      "Откладываю."
    ],
    [
      "overthink",
      "Начинаю ещё больше анализировать."
    ],
    [
      "more_information",
      "Ищу ещё информацию."
    ],
    [
      "lower_requirements",
      "Снижаю требования."
    ],
    [
      "soften_offer",
      "Смягчаю цену / предложение."
    ],
    [
      "overexplain",
      "Начинаю долго объясняться."
    ],
    [
      "ask_others",
      "Спрашиваю мнение других."
    ],
    [
      "do_everything_myself",
      "Делаю всё самостоятельно."
    ],
    [
      "return_old",
      "Возвращаюсь к привычному варианту."
    ],
    [
      "devalue_goal",
      "Решаю, что мне это вообще не особенно нужно."
    ],
    [
      "doubt_goal",
      "Снова начинаю сомневаться в самой цели."
    ],
    [
      "switch_task",
      "Переключаюсь на другую задачу."
    ],
    [
      "other",
      "Другое."
    ]
  ],
  "preserved_value": [
    [
      "self_image",
      "Моё представление о себе."
    ],
    [
      "relationships",
      "Отношения с определёнными людьми."
    ],
    [
      "place",
      "Моё привычное место среди людей."
    ],
    [
      "approval",
      "Чужое хорошее отношение ко мне."
    ],
    [
      "control",
      "Контроль."
    ],
    [
      "predictability",
      "Предсказуемость."
    ],
    [
      "avoid_rejection",
      "Возможность не столкнуться с отказом."
    ],
    [
      "avoid_reality_test",
      "Возможность не проверять себя реальностью."
    ],
    [
      "responsibility_level",
      "Привычный уровень ответственности."
    ],
    [
      "unknown",
      "Не знаю."
    ],
    [
      "other",
      "Другое."
    ]
  ]
};
options.goal_known = [['goal_known_yes', 'Да, я примерно знаю результат.'], ['goal_known_no', 'Нет, я вообще не понимаю, чего хочу.']];
const emptyState = () => Object.fromEntries(['goal_known', 'goal_area', 'goal_text', 'action_clarity', 'action_text', 'threat_primary', 'threat_secondary', 'self_primary', 'self_loss', 'protection_behavior', 'preserved_value', 'avoidance_sentence', 'future_self', 'threat_other', 'self_primary_other', 'self_loss_other', 'protection_behavior_other', 'preserved_value_other'].map(key => [key, '']));
let state = emptyState();
let step = 1;
let threats = [];
const workspace = document.getElementById('diagnostic-workspace');
const start = document.getElementById('diagnostic-start');
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
const label = (key, value) => options[key].find(option => option[0] === value)?.[1] || '';
const error = key => `<p id="${key}-error" class="diagnostic-error" aria-live="polite"></p>`;
function textField(key, title, placeholder = '', optional = false) {
  return `<div class="diagnostic-field"><label for="${key}">${title}</label>${optional ? '<p class="diagnostic-hint">Необязательно</p>' : ''}<textarea id="${key}" name="${key}" rows="4" placeholder="${escape(placeholder)}" aria-describedby="${key}-error" ${optional ? '' : 'required'}>${escape(state[key])}</textarea>${error(key)}</div>`;
}
function choices(key, title, items = options[key], multiple = false) {
  return `<fieldset aria-describedby="${key}-error"><legend>${title}</legend><p class="diagnostic-hint">${multiple ? 'Выберите один или два варианта.' : 'Выберите один вариант.'}</p>${items.map(([value, text]) => `<label class="diagnostic-option"><input type="${multiple ? 'checkbox' : 'radio'}" name="${key}" value="${value}" ${multiple ? (threats.includes(value) ? 'checked' : '') : (state[key] === value ? 'checked' : '')}><span>${escape(text)}</span></label>`).join('')}${error(key)}</fieldset>`;
}
function other(key, visible) {
  return `<div id="${key}-other-wrap" ${visible ? '' : 'hidden'}>${textField(`${key}_other`, 'Свой вариант')}</div>`;
}
const titles = ['', 'Вы сейчас можете достаточно конкретно назвать, чего хотите?', 'Какую часть своей жизни вы хотите изменить?', 'Если вы уже примерно знаете, чего хотите — что вам нужно сделать, но вы это регулярно не делаете?', 'Представьте, что завтра вы действительно сделали этот шаг. Что в этом может оказаться для вас неприятным?', 'Что вам особенно важно продолжать знать о себе?', 'Если вы больше не можете сказать о себе:', 'Когда новая цель начинает сталкиваться с этим представлением о себе — что вы обычно делаете?', 'Благодаря этому решению что остаётся по-прежнему?', 'Если следующие три года вы продолжите принимать такие же решения…'];
function focusScreen() {
  const heading = workspace.querySelector('#diagnostic-title');
  heading.focus({preventScroll: true});
  workspace.scrollIntoView({block: 'start'});
}
function render() {
  let body = '';
  if (step === 1) body = choices('goal_known', titles[1]);
  if (step === 2) body = choices('goal_area', titles[2]) + `<div id="goal-followup" ${state.goal_area ? '' : 'hidden'}>${textField('goal_text', 'Сформулируйте результат своими словами', '«Поднять чек в два раза»\n«Уйти из найма»\n«Нанять первого сотрудника»\n«Начать регулярно продавать в блоге»')}</div>`;
  if (step === 3) body = textField('action_text', titles[3], '«Назвать новую цену»\n«Сказать начальнику, что ухожу»\n«Начать выходить с продажей»\n«Передать часть клиентов сотруднику»\n«Сказать нет»') + choices('action_clarity', 'Насколько ясно вам это действие?');
  if (step === 4) body = choices('threat', titles[4], options.threat, true) + other('threat', threats.includes('other')) + '<div id="threat-followup"></div>';
  if (step === 5) body = choices('self_primary', titles[5]) + other('self_primary', state.self_primary === 'other');
  if (step === 6) body = `<p class="diagnostic-context">${titles[6]}</p><blockquote class="diagnostic-quote">«${escape(state.self_primary === 'other' ? state.self_primary_other : label('self_primary', state.self_primary))}»</blockquote>` + choices('self_loss', 'что в этом самое неприятное?') + other('self_loss', state.self_loss === 'other');
  if (step === 7) body = choices('protection_behavior', titles[7]) + other('protection_behavior', state.protection_behavior === 'other');
  if (step === 8) body = choices('preserved_value', titles[8]) + other('preserved_value', state.preserved_value === 'other') + textField('avoidance_sentence', 'Закончите фразу:<br>«Если я продолжаю делать по-старому, мне не приходится…»', '', true);
  if (step === 9) body = `<p class="diagnostic-context">${titles[9]}</p>` + textField('future_self', 'кем вам удастся продолжить оставаться?');
  workspace.innerHTML = `<p id="diagnostic-title" class="diagnostic-progress" tabindex="-1">Шаг ${step} из 9</p><progress max="9" value="${step}" aria-labelledby="diagnostic-title"></progress><form class="diagnostic-form ${step === 9 ? 'diagnostic-quiet' : ''}" novalidate>${body}<div class="diagnostic-navigation">${step > 1 ? '<button type="button" class="button diagnostic-back" data-back>Назад</button>' : ''}<button type="submit" class="button">${step === 9 ? 'Показать, что здесь можно проверить' : 'Дальше'}</button></div></form>`;
  if (step === 4) updateThreats();
  if (step === 3) workspace.querySelector('#action_text').required = state.action_clarity !== 'action_unknown';
  focusScreen();
}
function updateThreats() {
  workspace.querySelector('#threat-followup').innerHTML = threats.length === 2 ? choices('threat_primary', 'А если оставить только одно — что самое неприятное?', options.threat.filter(([value]) => threats.includes(value))) : '';
  workspace.querySelector('#threat-other-wrap').hidden = !threats.includes('other');
  workspace.querySelectorAll('input[name="threat"]').forEach(input => { input.disabled = threats.length === 2 && !input.checked; });
  workspace.querySelector('fieldset .diagnostic-hint').textContent = threats.length === 2 ? 'Выбрано два варианта. Чтобы выбрать другой, снимите один из выбранных.' : 'Выберите один или два варианта.';
}
function clearError(key) {
  const node = document.getElementById(`${key}-error`);
  if (node) node.textContent = '';
  workspace.querySelectorAll(`[name="${key}"]`).forEach(input => input.removeAttribute('aria-invalid'));
}
function invalidateAfter(key) {
  const stages = [
    ['goal_known'], ['goal_area', 'goal_text'], ['action_clarity', 'action_text'],
    ['threat_primary', 'threat_secondary', 'threat_other'],
    ['self_primary', 'self_primary_other'], ['self_loss', 'self_loss_other'],
    ['protection_behavior', 'protection_behavior_other'],
    ['preserved_value', 'preserved_value_other', 'avoidance_sentence'], ['future_self']
  ];
  const index = stages.findIndex(keys => keys.includes(key));
  if (index < 0) return;
  for (const keys of stages.slice(index + 1)) for (const field of keys) state[field] = '';
  if (index < 3) threats = [];
  state.feedback = '';
  for (const field of ['evidence_strength', 'mixed_mode', 'conflict_center', 'secondary_conflict_center']) state[field] = '';
  resultScreens = [];
  resultIndex = 0;
}
workspace.addEventListener('input', event => {
  if (event.target.tagName !== 'TEXTAREA') return;
  const {name, value} = event.target;
  if (state[name] !== value) invalidateAfter(name);
  state[name] = value;
  clearError(name);
});
workspace.addEventListener('change', event => {
  const input = event.target;
  if (input.tagName !== 'INPUT') return;
  const {name, value} = input;
  clearError(name);
  if (name === 'threat') {
    if (input.checked && threats.length >= 2) { input.checked = false; return; }
    invalidateAfter('threat_primary');
    threats = input.checked ? [...threats, value] : threats.filter(item => item !== value);
    state.threat_primary = threats.length === 1 ? threats[0] : '';
    state.threat_secondary = '';
    if (!threats.includes('other')) {
      state.threat_other = '';
      workspace.querySelector('#threat_other').value = '';
      clearError('threat_other');
    }
    updateThreats();
    return;
  }
  if (state[name] !== value) invalidateAfter(name);
  state[name] = value;
  if (name === 'threat_primary') state.threat_secondary = threats.find(item => item !== value) || '';
  if (name === 'goal_area') workspace.querySelector('#goal-followup').hidden = false;
  if (name === 'action_clarity') {
    workspace.querySelector('#action_text').required = value !== 'action_unknown';
    if (value === 'action_unknown') clearError('action_text');
  }
  const otherWrap = document.getElementById(`${name}-other-wrap`);
  if (otherWrap) {
    otherWrap.hidden = value !== 'other';
    if (value !== 'other') { state[`${name}_other`] = ''; otherWrap.querySelector('textarea').value = ''; clearError(`${name}_other`); }
  }
});
function validate() {
  const missing = [];
  const requireValue = (key, message = 'Выберите один вариант.') => { if (!state[key]?.trim()) missing.push([key, message]); };
  const requireText = key => requireValue(key, 'Напишите ответ, чтобы продолжить.');
  if (step === 1) requireValue('goal_known');
  if (step === 2) { requireValue('goal_area'); if (state.goal_area) requireText('goal_text'); }
  if (step === 3) { requireValue('action_clarity'); if (state.action_clarity !== 'action_unknown') requireText('action_text'); }
  if (step === 4) {
    if (!threats.length) missing.push(['threat', 'Выберите один или два варианта.']);
    if (threats.length === 2) requireValue('threat_primary', 'Выберите, что из этих двух самое неприятное.');
    if (threats.includes('other')) requireText('threat_other');
  }
  const key = {5:'self_primary', 6:'self_loss', 7:'protection_behavior', 8:'preserved_value'}[step];
  if (key) { requireValue(key); if (state[key] === 'other') requireText(`${key}_other`); }
  if (step === 9) requireText('future_self');
  for (const [name, message] of missing) {
    document.getElementById(`${name}-error`).textContent = message;
    workspace.querySelectorAll(`[name="${name}"]`).forEach(input => { input.setAttribute('aria-invalid', 'true'); input.setAttribute('aria-describedby', `${name}-error`); });
  }
  if (missing.length) workspace.querySelector(`[name="${missing[0][0]}"]`).focus();
  return missing.length === 0;
}
function fallback(kind) {
  const isGoal = kind === 'F0';
  workspace.innerHTML = `<h3 id="diagnostic-title" tabindex="-1">${isGoal ? 'Похоже, ваш вопрос находится немного раньше' : 'Здесь пока рано искать психологический конфликт'}</h3><div class="diagnostic-message">${isGoal ? '<p>Эта диагностика полезнее человеку, который уже примерно знает, куда хочет двигаться, но не понимает, почему продолжает действовать по-старому.</p><p>У вас сейчас вопрос находится раньше:</p><p class="diagnostic-quote">«А чего я вообще хочу?»</p><p>Это отдельная задача.</p><p>Было бы нечестно делать вид, что следующие вопросы автоматически дадут на неё ответ.</p>' : '<p>Вы знаете желаемый результат, но пока не можете назвать действие, которое должно к нему привести.</p><p>Возможно, проблема находится не между знанием и действием.</p><p>Возможно, вам действительно не хватает стратегии, информации или конкретного плана.</p><p class="diagnostic-quote">Не всякое бездействие нужно объяснять психологией.</p>'}</div><button type="button" class="button diagnostic-back" data-return>${isGoal ? 'Вернуться и изменить ответ' : 'Вернуться и уточнить ответ'}</button>`;
  focusScreen();
}
// Each dimension counts once, even when both threats support the same center.
const centerMappings = {
  GOODNESS: {self:['good_person','not_pushy','non_conflict'], threat:['disapproval','arrogant','greedy','rejection'], loss:['lose_self_respect','lose_respect'], behavior:['soften_offer','overexplain','lower_requirements'], preserved:['approval','relationships','self_image']},
  AUTONOMY: {self:['strong','independent','handle_myself'], threat:['dependence','responsibility'], loss:['neediness','loss_of_control','lose_self_respect'], behavior:['do_everything_myself'], preserved:['control','predictability','self_image']},
  PROFESSIONAL: {self:['professional'], goal:['money','business','visibility','career'], threat:['evaluation','arrogant','greedy','responsibility'], loss:['lose_self_respect','lose_respect','identity_confusion'], behavior:['soften_offer','overthink','more_information','doubt_goal'], preserved:['self_image','responsibility_level','control']},
  VISIBILITY: {self:['modest'], goal:['visibility'], threat:['evaluation','arrogant','relationship_change'], loss:['lose_self_respect','lose_respect','loss_of_belonging'], behavior:['lower_requirements','overexplain','devalue_goal','postpone'], preserved:['self_image','approval','relationships']},
  CONTROL: {self:['reasonable'], threat:['dependence','responsibility','rejection'], loss:['loss_of_control'], behavior:['overthink','more_information','postpone','ask_others'], preserved:['control','predictability','avoid_reality_test']},
  BELONGING: {self:['chosen','good_person','non_conflict'], threat:['lose_place','relationship_change','disapproval'], loss:['loss_of_belonging','identity_confusion','lose_respect'], behavior:['lower_requirements','overexplain','return_old','devalue_goal'], preserved:['relationships','place','approval']}
};
function scoreAnswers(answers) {
  if (answers.goal_known === 'goal_known_no') return {fallback:'F0'};
  if (answers.action_clarity === 'action_unknown') return {fallback:'F1'};
  const evidence = [
    ['self', answers.self_primary, 3], ['threat', answers.threat_primary, 2],
    ['threat', answers.threat_secondary, 1], ['loss', answers.self_loss, 2],
    ['behavior', answers.protection_behavior, 2], ['preserved', answers.preserved_value, 2],
    ['goal', answers.goal_area, 1]
  ];
  const ranked = Object.entries(centerMappings).map(([center, mapping]) => {
    let score = 0;
    const dimensions = new Set();
    for (const [dimension, answer, weight] of evidence) {
      if (mapping[dimension]?.includes(answer)) { score += weight; dimensions.add(dimension); }
    }
    return {center, score, dimensions:dimensions.size};
  }).sort((a, b) => b.score - a.score);
  const [top, second] = ranked;
  const candidates = ranked.filter(item => item.score >= 5 && item.dimensions >= 2 && top.score - item.score <= 2);
  const result = {evidence_strength:'weak', mixed_mode:'', conflict_center:'', secondary_conflict_center:''};
  if (candidates.length >= 2) {
    result.evidence_strength = 'mixed';
    result.mixed_mode = candidates.length === 2 ? 'pair' : 'complex';
    if (candidates.length === 2) {
      result.conflict_center = candidates[0].center;
      result.secondary_conflict_center = candidates[1].center;
    }
  } else if (top.score >= 8 && top.dimensions >= 4 && top.score - second.score >= 3 && answers.action_clarity === 'action_clear') {
    result.evidence_strength = 'strong'; result.conflict_center = top.center;
  } else if (top.score >= 5 && top.dimensions >= 3) {
    result.evidence_strength = 'moderate'; result.conflict_center = top.center;
  }
  // Complex results deliberately omit the optional ranked list: no arbitrary winner.
  return result;
}
const centerCopy = {
  GOODNESS: ['важность оставаться хорошим человеком и не разрушить чужое хорошее отношение', 'Можно ли вам сделать этот шаг и выдержать, что кто-то после этого не подтвердит вашу хорошесть?'],
  AUTONOMY: ['важность оставаться сильным и самостоятельным человеком', 'Если вы сделаете этот шаг, что произойдёт с образом человека, который всегда справляется сам?'],
  PROFESSIONAL: ['сохранить привычное представление о себе как о хорошем профессионале', 'Что в вашем сегодняшнем представлении о хорошем профессионале пока несовместимо с тем, что требует эта цель?'],
  VISIBILITY: ['не превратить собственную заметность в ощущение, что вы стали слишком большим, громким или самоуверенным', 'Можно ли вам сделать этот шаг и не превращать собственную заметность в доказательство высокомерия?'],
  CONTROL: ['сохранить контроль и предсказуемость и не действовать без достаточной гарантии', 'Что вам приходится не получать, чтобы продолжать не действовать без гарантии?'],
  BELONGING: ['сохранить привычное место среди людей и важные отношения', 'Если вы действительно достигнете этой цели, какое привычное место среди других может перестать быть вашим?']
};
const paragraph = text => `<p>${escape(text)}</p>`;
const quote = text => `<blockquote class="diagnostic-quote">${escape(text)}</blockquote>`;
const answerText = key => state[key] === 'other' ? state[`${key}_other`] : label(key, state[key]);
const costText = () => !['', 'other', 'unclear_but_important'].includes(state.self_loss)
  ? answerText('self_loss')
  : state.threat_primary === 'other' ? state.threat_other : label('threat', state.threat_primary);
let resultScreens = [];
let resultIndex = 0;
function buildResults() {
  const result = scoreAnswers(state);
  if (result.fallback) return fallback(result.fallback);
  Object.assign(state, result);
  const strength = result.evidence_strength;
  const mixed = strength === 'mixed';
  const weak = strength === 'weak';
  const complex = result.mixed_mode === 'complex';
  const screen = (title, body) => ({title, body});
  const action = paragraph('Вы назвали следующим шагом:') + quote(state.action_text);
  resultScreens = [
    screen('Давайте соберём ваши ответы', paragraph('Вы хотите:') + quote(state.goal_text) + paragraph('И понимаете, что один из следующих шагов:') + quote(state.action_text)),
    screen('Но у этого шага есть психологическая цена', paragraph('Самым неприятным для вас оказалось:') + quote(costText()) + paragraph('При этом вам особенно важно продолжать знать о себе:') + quote(answerText('self_primary')))
  ];
  if (!weak) resultScreens.push(screen('И вот здесь появляется интересное место',
    paragraph('Когда эти две вещи сталкиваются, вы чаще всего:') + quote(answerText('protection_behavior')) +
    paragraph('А благодаря этому сохраняется:') + quote(answerText('preserved_value')) +
    paragraph('То есть старое решение не обязательно бессмысленно. Оно что-то для вас сохраняет.')));
  if (weak) {
    resultScreens.push(screen('Красивого вывода здесь не будет',
      paragraph('Ваши ответы пока не складываются в достаточно согласованную картину.') +
      paragraph('И это лучше, чем если бы сайт притворился, что «раскрыл вашу истинную причину».') +
      paragraph('Возможно, дело не в конфликте с привычным представлением о себе.') +
      paragraph('Или мы пока задаём не тот вопрос.') + paragraph('Попробуйте проверить:') +
      '<ul class="editorial-list">' + ['Мне действительно понятно, что нужно сделать?', 'Мне хватает информации?', 'Мне хватает навыка?', 'Есть ли объективное ограничение?', 'Я действительно хочу эту цель?', 'Или психологическая цена просто находится в другом месте?'].map(text => `<li>${text}</li>`).join('') + '</ul>'));
  } else if (mixed) {
    resultScreens.push(complex
      ? screen('Здесь сходятся сразу несколько тем',
        paragraph('Ваши ответы сейчас не складываются в один или два достаточно различимых конфликта.') +
        paragraph('Несколько возможных объяснений получают похожую поддержку.') +
        paragraph('Это как раз тот случай, где автоматическая диагностика должна остановиться, а не выбрать за вас самую красивую версию.') +
        paragraph('По этим ответам пока нельзя достаточно уверенно сказать, что здесь первично, а что может быть следствием.'))
      : screen('Здесь может быть не один конфликт',
        paragraph('В ваших ответах одновременно звучат две темы:') + quote(centerCopy[result.conflict_center][0]) + paragraph('и') + quote(centerCopy[result.secondary_conflict_center][0]) +
        paragraph('Автоматическая диагностика не должна решать за вас, какая из них первична.') +
        paragraph('На индивидуальном разборе стоило бы проверить, что здесь первично, а что уже является следствием.')));
  } else if (strength === 'strong') {
    resultScreens.push(screen('Несколько ваших ответов сходятся в одной точке',
      paragraph('В ваших ответах повторяется одна и та же связь.') + action +
      paragraph('Возможно, этот шаг затрагивает важное для вас представление:') + quote(answerText('self_primary')) +
      paragraph('а привычное решение:') + quote(answerText('protection_behavior')) +
      paragraph('помогает сохранить:') + quote(answerText('preserved_value')) +
      paragraph('Это ещё не позволяет утверждать, что мы нашли главный механизм.') +
      paragraph('Но здесь уже есть достаточно согласованный паттерн, чтобы его исследовать.')));
  } else {
    resultScreens.push(screen('Вот гипотеза, которую стоит проверить', action +
      paragraph('Возможно, это действие начинает конфликтовать с важным представлением:') + quote(answerText('self_primary')) +
      paragraph('Тогда старое решение может мешать движению к цели, которую вы описали так:') + quote(state.goal_text) +
      paragraph('Возможно, при этом оно помогает избегать того, что вы назвали неприятным:') + quote(costText())));
  }
  if (!weak && !complex) {
    const centers = mixed ? [result.conflict_center, result.secondary_conflict_center] : [result.conflict_center];
    for (const center of centers) resultScreens.push(screen(centerCopy[center][1], action));
  }
  const observation = complex
    ? 'В следующий раз, когда вы окажетесь перед своим следующим шагом, попробуйте заметить не только то, что вы делаете, но и что именно становится психологически трудным в этот момент: чужая реакция, потеря контроля, изменение представления о себе, новая роль или изменение вашего места среди других.'
    : 'В следующий раз просто заметьте, что происходит между намерением сделать шаг и реальным решением.';
  resultScreens.push(screen('Не пытайтесь пока ничего исправлять', weak || mixed ? paragraph(observation) :
    action + paragraph('В следующий раз, когда вы снова окажетесь перед этим шагом, не спрашивайте сразу:') +
    quote('Почему я опять не могу?') + paragraph('Попробуйте заметить:') + quote('Что я сейчас сохраняю о себе, когда выбираю по-старому?') +
    paragraph('И ещё:') + quote('Что станет неправдой обо мне, если я всё-таки сделаю новый выбор?') +
    quote('Какую цену я плачу за то, чтобы старая версия меня оставалась целой?')));
  resultScreens.push(screen('Хотите разобрать, как это устроено именно в вашей ситуации?',
    (weak ? '' : paragraph('На индивидуальной диагностической сессии мы берём одну конкретную точку, где вы уже знаете, какого результата хотите, но продолжаете принимать решения, которые оставляют вас в прежней реальности.')) +
    paragraph('На встрече мы не обязаны подтвердить гипотезу сайта.') +
    paragraph('Мне нужна не красивая теория о вас.') +
    paragraph('Мне нужно понять, что действительно происходит в вашей ситуации.') +
    `<a class="button ${weak ? 'diagnostic-back' : ''}" href="https://t.me/m/EJlYNpuDNTJi" target="_blank" rel="noopener noreferrer">Разобрать мою ситуацию</a>` +
    '<p class="note">Напишите мне в Telegram: «Хочу разобрать ситуацию».</p>' +
    '<div class="result-feedback">' + choices('feedback', 'Насколько этот вывод попал в вашу ситуацию?', [['exact','Очень точно'],['partial','Есть что-то похожее'],['uncertain','Не уверен(а)'],['wrong','Совсем не про меня']]) + '</div>'));
  resultIndex = 0;
  renderResult();
}
function renderResult() {
  const {title, body} = resultScreens[resultIndex];
  const last = resultIndex === resultScreens.length - 1;
  workspace.innerHTML = `<p class="diagnostic-hint" role="status">Ваш результат · ${resultIndex + 1} из ${resultScreens.length}</p><h3 id="diagnostic-title" tabindex="-1">${escape(title)}</h3><div class="diagnostic-message">${body}</div><div class="diagnostic-navigation"><button type="button" class="button diagnostic-back" data-result-back>Назад</button>${last ? '' : '<button type="button" class="button" data-result-next>Дальше</button>'}</div>${last ? '<button type="button" class="button diagnostic-back result-restart" data-restart>Пройти ещё раз с другой ситуацией</button>' : ''}`;
  if (last && state.feedback) workspace.querySelector(`input[value="${state.feedback}"]`).checked = true;
  focusScreen();
}
workspace.addEventListener('submit', event => {
  event.preventDefault();
  if (!validate()) return;
  if (step === 1 && state.goal_known === 'goal_known_no') return fallback('F0');
  if (step === 3 && state.action_clarity === 'action_unknown') return fallback('F1');
  if (step === 9) return buildResults();
  step += 1;
  render();
});
workspace.addEventListener('click', event => {
  if (event.target.closest('[data-result-next]')) { resultIndex += 1; renderResult(); }
  if (event.target.closest('[data-result-back]')) { if (resultIndex > 0) { resultIndex -= 1; renderResult(); } else render(); }
  if (event.target.closest('[data-back]')) { step -= 1; render(); }
  if (event.target.closest('[data-return]')) render();
  if (event.target.closest('[data-restart]')) { state = emptyState(); threats = []; resultScreens = []; resultIndex = 0; step = 1; render(); }
});
start.addEventListener('click', () => {
  if (workspace.hidden) { workspace.hidden = false; start.setAttribute('aria-expanded', 'true'); render(); }
  else focusScreen();
});
})();
