
import React from 'react';

const healthLinks = [
  {
    title: 'Is Hypertension Curable? Experts Answer',
    url: 'https://www.financialexpress.com/life/world-hypertension-day-2024-is-hypertension-curable-experts-answer-3491621/',
    source: 'Financial Express'
  },
  {
    title: 'Beat The Heat: Expert-Approved Diet Tips To Fight Health Risks During A Heatwave',
    url: 'https://www.moneycontrol.com/health-and-fitness/beat-the-heat-expert-approved-diet-tips-to-fight-health-risks-during-a-heatwave-article-12736923.html',
    source: 'MoneyControl'
  },
  {
    title: 'How To Distinguish Between HMPV And RSV',
    url: 'https://www.onlymyhealth.com/how-to-distinguish-between-hmpv-and-rsv-12977823486',
    source: 'OnlyMyHealth'
  },
  {
    title: 'HMPV Can Be Complex In Immunocompromised, Elderly: Know When To Test',
    url: 'https://www.healthshots.com/hindi/preventive-care/hmpv-can-be-complex-in-immunocompromised-elderly-know-when-to-test/',
    source: 'Healthshots'
  },
  {
    title: 'MAFLD: The Silent Liver Condition Explained',
    url: 'https://news.abplive.com/health/mafld-silent-liver-condition-explained-1766347',
    source: 'ABP Live'
  },
  {
    title: 'How To Differentiate Whooping Cough From Cold',
    url: 'https://www.onlymyhealth.com/how-to-differentiate-whooping-cough-from-cold-12977828089',
    source: 'OnlyMyHealth'
  },
  {
    title: 'Protecting Children During Monsoon: Common Illnesses And How To Prevent Them',
    url: 'https://www.news18.com/lifestyle/health-and-fitness/protecting-children-during-monsoon-common-illnesses-and-how-to-prevent-them-ws-l-9422960.html',
    source: 'News18'
  },
  {
    title: 'From Flu To Hepatitis Shots: Adult Vaccines You Should Not Skip',
    url: 'https://www.news18.com/lifestyle/health-and-fitness/from-flu-to-hepatitis-shots-adult-vaccines-you-should-not-skip-ws-l-9536860.html',
    source: 'News18'
  },
  {
    title: 'Consulting AI for your heart? Proceed with caution',
    url: 'https://www.etvbharat.com/en/!health/dangers-ai-advice-heart-health-enn25092402871',
    source: 'ETV Bharat'
  },
  {
    title: 'Silent Crisis In Men’s Health',
    url: 'https://www.etvbharat.com/en/health/men-health-crises-culture-silence-habits-enn25112004068',
    source: 'ETV Bharat'
  },
  {
    title: 'Smart Nutrition Tips For Christmas',
    url: 'https://www.thedailyjagran.com/lifestyle/eating-healthy-this-christmas-is-easier-than-you-think-doctor-shares-tips-to-enjoy-festive-food-10288024',
    source: 'The Daily Jagran'
  }
];

const HealthTips: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Health Tips & Articles</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {healthLinks.map((link, index) => (
          <a href={link.url} key={index} target="_blank" rel="noopener noreferrer" className="block bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300 border border-slate-100">
            <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">{link.title}</h2>
            <p className="mt-1 text-sky-500 font-medium text-[10px]">Read more on {link.source}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
