/* =====================================================================
   questions.js — 문제은행 (비례식 30 + 비례배분 30 = 60문제)
   선생님이 문제를 추가·수정할 때는 이 파일만 고치면 됩니다.
   ---------------------------------------------------------------------
   [장소(location) · 미션(missionType)]
     computer  · power     전력 회로 복구        비례식
     science   · liquid    과학실 용액 배합       비례식
     cafeteria · recipe    급식실 레시피 복구     비례식
     cafeteria · juice     과일 주스 만들기       비례식
     broadcast · volume    방송실 음량 조절       비례식
     office    · evacmap   비상 대피 지도         비례식
     nurse     · water     보건실 물 공급         비례식(소수)
     library   · books     도서관 책 정리         비례배분
     gym       · teams     체육관 팀 편성         비례배분
     classroom · supplies  교실 준비물 나누기     비례배분
   ---------------------------------------------------------------------
   [공통 항목]
     difficulty  : 1 쉬움 · 2 보통 · 3 어려움
     question    : 문제 문장 (전체 문장)
     lines       : 미션 화면에 보여줄 짧은 문장 2~3줄 (5초 안에 이해되게)
     labels      : 미니게임 화면에 표시할 이름
     answer      : 정답
     unit        : 단위 (없으면 "")
     hint        : 두 번째 오답 때 보여줄 힌트
     steps       : 세 번째 오답 때 보여줄 식의 구조 (정답 숫자는 쓰지 않기!)
     explanation : 게임이 끝난 뒤 '틀린 문제 다시 보기'에서 보여줄 풀이

   [비례식 문제]
     proportion  : [a, b, c, d]  →  a : b = c : d   (모르는 칸은 null)
     answer      : 숫자 하나

   [비례배분 문제]
     total       : 나눌 전체 양 (전체를 구하는 문제는 null)
     parts       : 비  예) [2, 3]  또는  [2, 3, 5]
     ask         : "parts" = 각각의 몫 구하기 / "total" = 전체 구하기
     known       : ask가 "total"일 때 알려준 몫  예) [16, null]
     answer      : "parts" → [몫1, 몫2, …] / "total" → 숫자 하나

   [미니게임용 선택 항목]
     step        : 버튼·슬라이더 한 칸의 크기 (용액, 음량)
     tolerance   : 정답으로 인정하는 오차 (주스 따르기)
     snap        : 분할선이 움직이는 단위 (체육관 코스·시간)
   ===================================================================== */


const QUESTIONS = [

  /* ⑪ 원의 구성 요소와 원주율의 뜻 (4) */
  {
    id: "COM_01", location: "computer", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "원의 둘레를 나타내는 말은 무엇일까요?",
    choices: ["반지름", "원주", "지름", "원주율"],
    answer: 2,
    hint: "원의 둘레의 길이를 뜻하는 말이에요.",
    explanation: "원의 둘레를 원주라고 합니다."
  },
  {
    id: "COM_02", location: "computer", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "원의 중심에서 원 위의 한 점까지의 거리를 무엇이라고 할까요?",
    choices: ["지름", "원주율", "반지름", "원주"],
    answer: 3,
    hint: "원의 중심에서 가장자리까지의 거리예요.",
    explanation: "원의 중심에서 원 위의 한 점까지의 거리를 반지름이라고 합니다."
  },
  {
    id: "COM_08", location: "computer", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "원의 중심을 지나 원 위의 두 점을 이은 선분을 무엇이라고 할까요?",
    choices: ["반지름", "원주", "원주율", "지름"],
    answer: 4,
    hint: "반지름의 2배인 길이예요.",
    explanation: "원의 중심을 지나 원 위의 두 점을 이은 선분을 지름이라고 합니다."
  },
  {
    id: "COM_04", location: "computer", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "원주를 지름으로 나눈 값은 무엇일까요?",
    choices: ["원주", "지름", "원주율", "반지름"],
    answer: 3,
    hint: "계산할 때 이 문제 묶음에서는 3으로 생각해요.",
    explanation: "원주율은 원주를 지름으로 나눈 값이며, 이 문제에서는 3으로 계산합니다."
  },

  /* ⑫ 원주, 반지름, 지름, 원주율의 관계 */
  {
    id: "CIR_05", location: "science", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "반지름이 4cm인 원의 지름은 몇 cm일까요?",
    choices: ["4cm", "6cm", "8cm", "12cm"],
    answer: 3,
    hint: "지름은 반지름의 2배예요.",
    explanation: "지름은 반지름의 2배이므로 4 × 2 = 8cm입니다."
  },
  {
    id: "KIT_01", location: "cafeteria", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "지름이 18cm인 원의 반지름은 몇 cm일까요?",
    choices: ["6cm", "9cm", "18cm", "36cm"],
    answer: 2,
    hint: "반지름은 지름의 절반이에요.",
    explanation: "반지름은 지름의 절반이므로 18 ÷ 2 = 9cm입니다."
  },
  {
    id: "KIT_02", location: "cafeteria", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "이 게임에서 원주율은 얼마로 계산할까요?",
    choices: ["2", "3.14", "3", "4"],
    answer: 3,
    hint: "원주율을 간단한 자연수로 약속했어요.",
    explanation: "계산을 간단히 하기 위해 이 문제 묶음에서는 원주율을 3으로 사용합니다."
  },
  {
    id: "KIT_03", location: "cafeteria", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "지름이 20cm인 원판을 10바퀴 굴렸습니다. 원판이 굴러간 거리는 몇 cm일까요?",
    choices: ["60cm", "200cm", "300cm", "600cm"],
    answer: 4,
    hint: "원주를 구하는 방법은 지름 × 원주율이에요. 한 바퀴 이동 거리에 10을 곱하세요.",
    explanation: "원주는 20 × 3 = 60cm이므로 10바퀴를 간 거리는 600cm입니다."
  },
  {
    id: "JUI_01", location: "cafeteria", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "지름이 8cm인 원의 원주는 몇 cm일까요? (원주율은 3)",
    choices: ["11cm", "16cm", "24cm", "32cm"],
    answer: 3,
    hint: "원주 = 지름 × 원주율",
    explanation: "원주는 지름 × 원주율이므로 8 × 3 = 24cm입니다."
  },

  /* ⑬ 원주 구하기 */
  {
    id: "JUI_02", location: "cafeteria", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "반지름이 5cm인 원의 원주는 몇 cm일까요? (원주율은 3)",
    choices: ["15cm", "20cm", "25cm", "30cm"],
    answer: 4,
    hint: "반지름을 2배 하면 지름이 돼요.",
    explanation: "지름은 10cm이고, 원주는 10 × 3 = 30cm입니다."
  },
  {
    id: "JUI_03", location: "cafeteria", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "지름이 12cm인 원의 원주는 몇 cm일까요? (원주율은 3)",
    choices: ["24cm", "30cm", "36cm", "48cm"],
    answer: 3,
    hint: "원주 = 지름 × 3",
    explanation: "원주는 지름 × 원주율이므로 12 × 3 = 36cm입니다."
  },
  {
    id: "BRO_01", location: "broadcast", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "반지름이 7cm인 원의 원주는 몇 cm일까요? (원주율은 3)",
    choices: ["21cm", "35cm", "42cm", "49cm"],
    answer: 3,
    hint: "원주는 반지름 × 6으로 구할 수 있어요.",
    explanation: "지름은 14cm이고, 원주는 14 × 3 = 42cm입니다."
  },
  {
    id: "BRO_02", location: "broadcast", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "원주가 60cm인 원의 지름은 몇 cm일까요? (원주율은 3)",
    choices: ["15cm", "20cm", "30cm", "60cm"],
    answer: 2,
    hint: "지름 = 원주 ÷ 원주율",
    explanation: "지름은 원주를 원주율로 나눈 값이므로 60 ÷ 3 = 20cm입니다."
  },
  {
    id: "BRO_03", location: "broadcast", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "지름이 50cm인 바퀴가 한 바퀴 굴러가면 몇 cm를 이동할까요? (원주율은 3)",
    choices: ["50cm", "100cm", "150cm", "200cm"],
    answer: 3,
    hint: "바퀴가 한 바퀴 굴러간 거리는 바퀴의 원주와 같아요.",
    explanation: "한 바퀴 이동한 거리는 원주와 같으므로 50 × 3 = 150cm입니다."
  },
  {
    id: "OFF_01", location: "office", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "원주가 90cm인 원의 반지름은 몇 cm일까요? (원주율은 3)",
    choices: ["10cm", "15cm", "20cm", "30cm"],
    answer: 2,
    hint: "먼저 지름을 구한 다음 2로 나누세요.",
    explanation: "지름은 90 ÷ 3 = 30cm이고 반지름은 15cm입니다."
  },

  /* ⑭ 원의 넓이 구하기 */
  {
    id: "OFF_02", location: "office", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "반지름이 5cm인 원의 넓이는 몇 ㎠일까요? (원주율은 3)",
    choices: ["25㎠", "50㎠", "75㎠", "100㎠"],
    answer: 3,
    hint: "원의 넓이 = 반지름 × 반지름 × 원주율",
    explanation: "원의 넓이는 반지름 × 반지름 × 원주율이므로 5 × 5 × 3 = 75㎠입니다."
  },
  {
    id: "OFF_03", location: "office", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "반지름이 10cm인 원의 넓이는 몇 ㎠일까요? (원주율은 3)",
    choices: ["100㎠", "200㎠", "300㎠", "600㎠"],
    answer: 3,
    hint: "10 × 10 × 3을 계산하세요.",
    explanation: "10 × 10 × 3 = 300㎠입니다."
  },
  {
    id: "OFF_04", location: "office", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "반지름이 4cm인 원의 넓이는 몇 ㎠일까요? (원주율은 3)",
    choices: ["12㎠", "24㎠", "36㎠", "48㎠"],
    answer: 4,
    hint: "반지름을 두 번 곱한 뒤 3을 곱하세요.",
    explanation: "4 × 4 × 3 = 48㎠입니다."
  },
  {
    id: "NUR_01", location: "nurse", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "지름이 12cm인 원의 넓이는 몇 ㎠일까요? (원주율은 3)",
    choices: ["36㎠", "72㎠", "108㎠", "144㎠"],
    answer: 3,
    hint: "먼저 지름을 2로 나누어 반지름을 구하세요.",
    explanation: "반지름은 6cm이므로 6 × 6 × 3 = 108㎠입니다."
  },
  {
    id: "NUR_02", location: "nurse", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "반지름이 8cm인 원의 넓이는 몇 ㎠일까요? (원주율은 3)",
    choices: ["64㎠", "128㎠", "192㎠", "256㎠"],
    answer: 3,
    hint: "8 × 8을 먼저 계산하세요.",
    explanation: "8 × 8 × 3 = 192㎠입니다."
  },
  {
    id: "NUR_03", location: "nurse", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "원의 넓이가 27㎠일 때 반지름은 몇 cm일까요? (원주율은 3)",
    choices: ["2cm", "3cm", "6cm", "9cm"],
    answer: 2,
    hint: "넓이 27을 3으로 나누면 반지름을 두 번 곱한 값이 나와요.",
    explanation: "반지름을 두 번 곱한 값은 9이고, 3 × 3 = 9이므로 반지름은 3cm입니다."
  },

  /* 원주와 원의 넓이 추가 문제 */
  {
    id: "NUR_04", location: "nurse", missionType: "quiz", category: "비례식", difficulty: 1,
    question: "지름이 6cm인 원의 원주는 몇 cm일까요? (원주율은 3)",
    choices: ["12cm", "15cm", "18cm", "24cm"],
    answer: 3,
    hint: "원주 = 지름 × 3",
    explanation: "원주는 지름에 원주율 3을 곱해 구하므로 6 × 3 = 18cm입니다."
  },
  {
    id: "LIB_01", location: "library", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "반지름이 9cm인 원의 원주는 몇 cm일까요? (원주율은 3)",
    choices: ["27cm", "36cm", "45cm", "54cm"],
    answer: 4,
    hint: "지름은 반지름의 2배예요.",
    explanation: "지름은 18cm이고 원주는 18 × 3 = 54cm입니다."
  },
  {
    id: "LIB_02", location: "library", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "원주가 72cm인 원의 지름은 몇 cm일까요? (원주율은 3)",
    choices: ["18cm", "24cm", "36cm", "72cm"],
    answer: 2,
    hint: "지름 = 원주 ÷ 원주율",
    explanation: "지름은 원주를 원주율로 나누어 구하므로 72 ÷ 3 = 24cm입니다."
  },
  {
    id: "LIB_03", location: "library", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "원주가 48cm인 원의 반지름은 몇 cm일까요? (원주율은 3)",
    choices: ["6cm", "8cm", "12cm", "16cm"],
    answer: 2,
    hint: "먼저 지름을 구한 다음 2로 나누세요.",
    explanation: "지름은 16cm이고 반지름은 지름의 절반인 8cm입니다."
  },
  {
    id: "LIB_04", location: "library", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "지름이 40cm인 바퀴가 3바퀴 굴러갔습니다. 이동한 거리는 몇 cm일까요? (원주율은 3)",
    choices: ["120cm", "240cm", "360cm", "480cm"],
    answer: 3,
    hint: "한 바퀴 이동 거리는 원주와 같아요.",
    explanation: "한 바퀴에 120cm를 이동하므로 세 바퀴에는 120 × 3 = 360cm를 이동합니다."
  },
  {
    id: "LIB_05", location: "library", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "반지름이 5cm인 바퀴가 2바퀴 굴러갔습니다. 이동한 거리는 몇 cm일까요? (원주율은 3)",
    choices: ["30cm", "40cm", "50cm", "60cm"],
    answer: 4,
    hint: "먼저 지름을 구하고 한 바퀴의 이동 거리를 계산하세요.",
    explanation: "한 바퀴 이동 거리는 30cm이므로 두 바퀴에는 60cm를 이동합니다."
  },
  {
    id: "LIB_06", location: "library", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "지름이 2m인 둥근 탁자의 가장자리를 따라 띠를 두르려고 합니다. 필요한 띠의 길이는 몇 m일까요? (원주율은 3)",
    choices: ["2m", "3m", "4m", "6m"],
    answer: 4,
    hint: "탁자의 가장자리 길이는 원주예요.",
    explanation: "탁자 가장자리의 길이는 원주이므로 2 × 3 = 6m입니다."
  },
  {
    id: "LIB_07", location: "library", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "지름이 30m인 원형 운동장을 한 바퀴 돌았습니다. 이동한 거리는 몇 m일까요? (원주율은 3)",
    choices: ["30m", "60m", "90m", "120m"],
    answer: 3,
    hint: "원형 운동장을 한 바퀴 돈 거리는 원주와 같아요.",
    explanation: "한 바퀴 이동 거리는 원주와 같으므로 30 × 3 = 90m입니다."
  },
  {
    id: "GYM_01", location: "gym", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "반지름이 6cm인 원의 넓이는 몇 ㎠일까요? (원주율은 3)",
    choices: ["36㎠", "72㎠", "108㎠", "144㎠"],
    answer: 3,
    hint: "반지름 × 반지름 × 3을 계산하세요.",
    explanation: "원의 넓이는 반지름 × 반지름 × 원주율이므로 6 × 6 × 3 = 108㎠입니다."
  },
  {
    id: "GYM_02", location: "gym", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "지름이 20cm인 원의 넓이는 몇 ㎠일까요? (원주율은 3)",
    choices: ["100㎠", "200㎠", "300㎠", "400㎠"],
    answer: 3,
    hint: "먼저 반지름을 구하세요.",
    explanation: "반지름은 10cm이므로 원의 넓이는 10 × 10 × 3 = 300㎠입니다."
  },
  {
    id: "GYM_03", location: "gym", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "반지름이 7cm인 원의 넓이는 몇 ㎠일까요? (원주율은 3)",
    choices: ["49㎠", "98㎠", "147㎠", "196㎠"],
    answer: 3,
    hint: "7을 두 번 곱한 다음 3을 곱하세요.",
    explanation: "7 × 7 × 3 = 147㎠입니다."
  },
  {
    id: "GYM_04", location: "gym", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "반지름이 2cm인 원의 넓이는 몇 ㎠일까요? (원주율은 3)",
    choices: ["6㎠", "8㎠", "12㎠", "16㎠"],
    answer: 3,
    hint: "2 × 2 × 3을 계산하세요.",
    explanation: "2 × 2 × 3 = 12㎠입니다."
  },
  {
    id: "GYM_05", location: "gym", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "원의 넓이가 243㎠일 때 반지름은 몇 cm일까요? (원주율은 3)",
    choices: ["7cm", "8cm", "9cm", "10cm"],
    answer: 3,
    hint: "먼저 243을 3으로 나누고, 어떤 수를 두 번 곱하면 그 값이 되는지 생각하세요.",
    explanation: "반지름을 두 번 곱한 값은 81이고 9 × 9 = 81이므로 반지름은 9cm입니다."
  },
  {
    id: "GYM_06", location: "gym", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "원의 넓이가 192㎠일 때 지름은 몇 cm일까요? (원주율은 3)",
    choices: ["8cm", "12cm", "16cm", "24cm"],
    answer: 3,
    hint: "넓이를 3으로 나누어 반지름을 구한 다음, 2배 하세요.",
    explanation: "반지름은 8cm이고 지름은 반지름의 2배이므로 16cm입니다."
  },
  {
    id: "GYM_07", location: "gym", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "반지름이 4cm인 원과 반지름이 8cm인 원이 있습니다. 큰 원의 넓이는 작은 원의 넓이의 몇 배일까요? (원주율은 3)",
    choices: ["2배", "3배", "4배", "8배"],
    answer: 3,
    hint: "두 원의 넓이를 각각 구한 다음 비교하세요.",
    explanation: "작은 원의 넓이는 48㎠, 큰 원의 넓이는 192㎠이므로 큰 원은 4배입니다."
  },
  {
    id: "GYM_08", location: "gym", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "어떤 원의 반지름을 3cm에서 6cm로 2배 늘렸습니다. 원주는 몇 배가 될까요?",
    choices: ["2배", "3배", "4배", "6배"],
    answer: 1,
    hint: "두 원의 원주를 각각 구해 비교하세요.",
    explanation: "반지름이 2배가 되면 지름과 원주도 2배가 되므로 원주는 2배입니다."
  },
  {
    id: "CLS_01", location: "classroom", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "어떤 원의 지름을 4cm에서 8cm로 2배 늘렸습니다. 원의 넓이는 몇 배가 될까요? (원주율은 3)",
    choices: ["2배", "3배", "4배", "8배"],
    answer: 3,
    hint: "지름을 2로 나누어 반지름을 구하고 두 원의 넓이를 비교하세요.",
    explanation: "처음 넓이는 12㎠, 바뀐 넓이는 48㎠이므로 넓이는 4배가 됩니다."
  },
  {
    id: "CLS_02", location: "classroom", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "원주가 36cm인 원의 반지름은 몇 cm일까요? (원주율은 3)",
    choices: ["3cm", "6cm", "9cm", "12cm"],
    answer: 2,
    hint: "원주를 3으로 나누어 지름을 구한 다음 2로 나누세요.",
    explanation: "지름은 36 ÷ 3 = 12cm이고 반지름은 6cm입니다."
  },
  {
    id: "CLS_03", location: "classroom", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "반지름이 3cm인 원과 반지름이 6cm인 원이 있습니다. 두 원의 넓이의 차이는 몇 ㎠일까요? (원주율은 3)",
    choices: ["27㎠", "54㎠", "81㎠", "108㎠"],
    answer: 3,
    hint: "각 원의 넓이를 구한 다음 큰 넓이에서 작은 넓이를 빼세요.",
    explanation: "큰 원의 넓이는 108㎠, 작은 원의 넓이는 27㎠이므로 차이는 81㎠입니다."
  },
  {
    id: "CLS_04", location: "classroom", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "반지름이 10m인 원 모양의 화단이 있습니다. 화단의 넓이는 몇 ㎡일까요? (원주율은 3)",
    choices: ["100㎡", "200㎡", "300㎡", "400㎡"],
    answer: 3,
    hint: "원의 넓이 = 반지름 × 반지름 × 3",
    explanation: "화단의 넓이는 10 × 10 × 3 = 300㎡입니다."
  },
  {
    id: "CLS_05", location: "classroom", missionType: "quiz", category: "비례배분", difficulty: 1,
    question: "원주가 42cm인 원이 있습니다. 이 원의 반지름은 얼마인가요? (원주율은 3)",
    choices: ["6cm", "7cm", "14cm", "21cm"],
    answer: 2,
    hint: "원주를 3으로 나누어 지름을 구한 다음 2로 나누세요.",
    explanation: "지름은 42 ÷ 3 = 14cm이고, 반지름은 그 절반인 7cm입니다."
  }
];

