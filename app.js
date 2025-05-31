// app.js

// 테스트 질문 데이터
export const questions = [
  {
    text: "스트레스를 받을 때 당신의 반응은?",
    options: [
      { text: "완벽하게 해결하려고 노력한다", weights: {1: 3} },
      { text: "도움을 주어 문제를 해결한다", weights: {2: 3} },
      { text: "성공적으로 극복해낸다", weights: {3: 3} },
      { text: "독특한 방식으로 표현한다", weights: {4: 3} },
      { text: "혼자만의 시간을 갖는다", weights: {5: 3} },
      { text: "안전한 방법을 찾는다", weights: {6: 3} },
      { text: "새로운 활동으로 전환한다", weights: {7: 3} },
      { text: "강력하게 대응한다", weights: {8: 3} },
      { text: "평화롭게 해결하려 한다", weights: {9: 3} }
    ]
  },
  {
    text: "사람들과의 관계에서 가장 중요하게 생각하는 것은?",
    options: [
      { text: "정직하고 올바른 관계", weights: {1: 2, 9: 1} },
      { text: "따뜻하고 도움이 되는 관계", weights: {2: 2, 1: 1} },
      { text: "성공을 함께 나누는 관계", weights: {3: 2, 2: 1} },
      { text: "깊이 있고 진정성 있는 관계", weights: {4: 2, 3: 1} },
      { text: "개인적 공간을 존중하는 관계", weights: {5: 2, 4: 1} },
      { text: "신뢰할 수 있는 안전한 관계", weights: {6: 2, 5: 1} },
      { text: "재미있고 활기찬 관계", weights: {7: 2, 6: 1} },
      { text: "솔직하고 직접적인 관계", weights: {8: 2, 7: 1} },
      { text: "편안하고 평화로운 관계", weights: {9: 2, 8: 1} }
    ]
  },
  {
    text: "새로운 환경에 적응할 때 당신의 모습은?",
    options: [
      { text: "체계적으로 계획을 세운다", weights: {1: 2, 2: 1} },
      { text: "다른 사람들과 친해지려 노력한다", weights: {2: 2, 3: 1} },
      { text: "빠르게 성과를 내려고 한다", weights: {3: 2, 4: 1} },
      { text: "나만의 특별한 공간을 만든다", weights: {4: 2, 5: 1} },
      { text: "충분히 관찰하고 분석한다", weights: {5: 2, 6: 1} },
      { text: "안전한 기반을 먼저 확보한다", weights: {6: 2, 7: 1} },
      { text: "다양한 가능성을 탐색한다", weights: {7: 2, 8: 1} },
      { text: "주도적으로 상황을 이끈다", weights: {8: 2, 9: 1} },
      { text: "자연스럽게 흘러가는 대로 한다", weights: {9: 2, 1: 1} }
    ]
  },
  {
    text: "가장 끌리는 향의 특성은?",
    options: [
      { text: "깔끔하고 정제된 향", weights: {1: 2} },
      { text: "따뜻하고 포근한 향", weights: {2: 2} },
      { text: "세련되고 매력적인 향", weights: {3: 2} },
      { text: "독특하고 개성적인 향", weights: {4: 2} },
      { text: "미니멀하고 지적인 향", weights: {5: 2} },
      { text: "편안하고 안정적인 향", weights: {6: 2} },
      { text: "상큼하고 활기찬 향", weights: {7: 2} },
      { text: "강렬하고 임팩트 있는 향", weights: {8: 2} },
      { text: "자연스럽고 부드러운 향", weights: {9: 2} }
    ]
  },
  {
    text: "당신이 추구하는 삶의 가치는?",
    options: [
      { text: "완벽함과 올바름", weights: {1: 3} },
      { text: "사랑과 연결", weights: {2: 3} },
      { text: "성취와 인정", weights: {3: 3} },
      { text: "진정성과 의미", weights: {4: 3} },
      { text: "지식과 이해", weights: {5: 3} },
      { text: "안전과 충성", weights: {6: 3} },
      { text: "자유와 모험", weights: {7: 3} },
      { text: "힘과 독립", weights: {8: 3} },
      { text: "평화와 조화", weights: {9: 3} }
    ]
  }
];
