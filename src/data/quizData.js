import one from "../assets/QuestionAnswerSection/1.jpg";
import two from "../assets/QuestionAnswerSection/2.jpg";
import three from "../assets/QuestionAnswerSection/3.jpg";
import four from "../assets/QuestionAnswerSection/4.jpg";
import five from "../assets/QuestionAnswerSection/5.jpg";
import six from "../assets/QuestionAnswerSection/6.jpg";
import seven from "../assets/QuestionAnswerSection/7.jpg";
import eight from "../assets/QuestionAnswerSection/8.jpg";
import nine from "../assets/QuestionAnswerSection/9.jpg";
import ten from "../assets/QuestionAnswerSection/10.jpg";
import eleven from "../assets/QuestionAnswerSection/11.jpg";
import twelve from "../assets/QuestionAnswerSection/12.jpg";
import thirteen from "../assets/QuestionAnswerSection/13.jpg";
import fourteen from "../assets/QuestionAnswerSection/14.jpg";
import fifteen from "../assets/QuestionAnswerSection/15.jpg";
import sixteen from "../assets/QuestionAnswerSection/16.jpg";
import seventeen from "../assets/QuestionAnswerSection/17.jpg";

// Shuffle function using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const quizData = [
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "دب الباندا", isCorrect: true },
      { text: "الكوالا", isCorrect: false },
      { text: "الدب القطبي", isCorrect: false },
    ]),
    detail: "من بين جميع الحيوانات المهددة بالخطر، يعتبر دب الباندا من الأكثر شهرة. ويعاني هذا النوع من البقاء في الصين ويقدر أنه هناك حالياً حوالي 2000 عينة في البرية أو في الأسر. هم مهددون بسبب قلة التزاوج وتدمير غابات الخيزران.",
    image: one
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "النمر البنغالي", isCorrect: true },
      { text: "النمر البرتقالي", isCorrect: false },
      { text: "النمر الهندي", isCorrect: false },
    ]),
    detail: "إنه أحد الحيوانات المهددة بالانقراض ويعود ذلك للصيد الجائر وفقدان موطنه الطبيعي. يوجد حوالي 210 نمر أبيض في العالم، معظمها في الأسر.",
    image: two
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "النمر الأبيض", isCorrect: true },
      { text: "نمور الآمور", isCorrect: false },
      { text: "نمر جاوة", isCorrect: false },
    ]),
    detail: "يعيش هذا النوع من النمور في بلدان مثل الهند وبنغلاديش ونيبال والتبت. يرتبط خطر الانقراض بإزالة الغابات والصيد غير المنضبط.",
    image: three
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "الكنغر", isCorrect: true },
      { text: "آكل النمل", isCorrect: false },
      { text: "الثعلب", isCorrect: false },
    ]),
    detail: "تعيش حيوانات الكنغر في أستراليا وتواجه خطر الانقراض بسبب تغير المناخ الذي يؤثر على موائلها.",
    image: four
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "القرش الأبيض الكبير", isCorrect: true },
      { text: "القرش الحوت", isCorrect: false },
      { text: "قرش الثور", isCorrect: false },
    ]),
    detail: "يعتبر القرش الأبيض الكبير من بين أنواع الحيوانات المهددة بالانقراض بسبب الصيد الرياضي وانخفاض معدل التكاثر.",
    image: five
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "السلحفاة جلدية الظهر", isCorrect: true },
      { text: "سلحفاة ريدلي كمب", isCorrect: false },
      { text: "السلحفاة ذات الظهر المسطح", isCorrect: false },
    ]),
    detail: "تتميز السلحفاة جلدية الظهر بوجود درع جلدي سميك وهي مهددة بالانقراض بسبب تغير المناخ والصيد الجائر.",
    image: six
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "وحيد القرن الجاوي", isCorrect: true },
      { text: "وحيد القرن الأسود", isCorrect: false },
      { text: "وحيد القرن السومطري", isCorrect: false },
    ]),
    detail: "يعتبر وحيد القرن الجاوي من الحيوانات المهددة بالانقراض بسبب فقدان موطنه الطبيعي والصيد الجائر.",
    image: seven
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "طائر الكاكابو", isCorrect: true },
      { text: "طائر الفلامنغو", isCorrect: false },
      { text: "طائر الشاهين", isCorrect: false },
    ]),
    detail: "الكاكابو هو نوع من الببغاوات التي لا تطير ويعيش في نيوزيلندا. مهدد بالانقراض بسبب الحيوانات المفترسة وتغير المناخ.",
    image: eight
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "الشعاب المرجانية", isCorrect: true },
      { text: "فرس البحر", isCorrect: false },
      { text: "الأخطبوطات", isCorrect: false },
    ]),
    detail: "الشعاب المرجانية تشكل مستعمرات بحرية مهمة، لكنها مهددة بالانقراض بسبب تدهور المحيطات وتغير المناخ.",
    image: nine
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "الفيل الآسيوي", isCorrect: true },
      { text: "الفيل الأفريقي", isCorrect: false },
      { text: "الفيل السريلانكي", isCorrect: false },
    ]),
    detail: "يعد الفيل الآسيوي من أكبر الحيوانات الثديية في آسيا، مهدد بالانقراض بسبب فقدان الموائل والصيد.",
    image: ten
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "كوندور الأنديز", isCorrect: true },
      { text: "الصقر الأصلع", isCorrect: false },
      { text: "صقر الشاهين", isCorrect: false },
    ]),
    detail: "كوندور الأنديز هو أكبر الطيور في العالم ويواجه خطر الانقراض بسبب الصيد وتلوث البيئة.",
    image: eleven
  },
  {
    question: "ما هو نوع الشجرة الموضحة في الصورة أدناه؟",
    options: shuffleArray([
      { text: "شجرة الغاف", isCorrect: true },
      { text: "شجرة السدر", isCorrect: false },
      { text: "شجرة السمر", isCorrect: false },
    ]),
    detail: "شجرة الغاف رمز للصمود، تنمو في شبه الجزيرة العربية وتساعد على الحفاظ على الرطوبة.",
    image: twelve
  },
  {
    question: "ما هو نوع الشجرة الموضحة في الصورة أدناه؟",
    options: shuffleArray([
      { text: "شجرة اللبان", isCorrect: true },
      { text: "شجرة العلعلان", isCorrect: false },
      { text: "شجرة السمر", isCorrect: false },
    ]),
    detail: "شجرة اللبان معروفة في سلطنة عمان واليمن وتستخدم لاستخراج البخور والعطور.",
    image: thirteen
  },
  {
    question: "ما هو نوع الشجرة الموضحة في الصورة أدناه؟",
    options: shuffleArray([
      { text: "شجرة السمر", isCorrect: true },
      { text: "شجرة السدر", isCorrect: false },
      { text: "شجرة العتم", isCorrect: false },
    ]),
    detail: "شجرة السمر تنتمي إلى عائلة السنط، معروفة بقدرتها على التحمل وتنمو في البيئات الصحراوية.",
    image: fourteen
  },
  {
    question: "ما هو نوع الشجرة الموضحة في الصورة أدناه؟",
    options: shuffleArray([
      { text: "شجرة العتم", isCorrect: true },
      { text: "شجرة العلعلان", isCorrect: false },
      { text: "شجرة السدر", isCorrect: false },
    ]),
    detail: "شجرة العتم تُعتبر جزءاً من المبادرات البيئية لحماية الأشجار ذات القيمة التاريخية والبيئية.",
    image: fifteen
  },
  {
    question: "ما هو نوع الشجرة الموضحة في الصورة أدناه؟",
    options: shuffleArray([
      { text: "شجرة السدر", isCorrect: true },
      { text: "شجرة العلعلان", isCorrect: false },
      { text: "شجرة الغاف", isCorrect: false },
    ]),
    detail: "شجرة السدر تُعتبر ذات فوائد طبية، وتستخدم أوراقها وثمرها في الطب التقليدي لتحسين صحة الجهاز الهضمي.",
    image: sixteen
  },
  {
    question: "ما هو نوع الشجرة الموضحة في الصورة أدناه؟",
    options: shuffleArray([
      { text: "شجرة العلعلان", isCorrect: true },
      { text: "شجرة الطلح", isCorrect: false },
      { text: "شجرة الفيكس", isCorrect: false },
    ]),
    detail: "شجرة العلعلان تنمو في المرتفعات الجبلية وتستخدم أخشابها في العطور والبخور.",
    image: seventeen
  }
];

export default quizData;
