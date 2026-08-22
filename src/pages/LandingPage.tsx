import { ArrowRight, Building2, Check, Coins, Landmark, Layers3, Rocket, Search, Target, TrendingUp, Wrench } from 'lucide-react';
import { RouteLink } from '../components/RouteLink';
import { Badge } from '../components/ui/badge';
import { ButtonLink } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { project } from '../data/project';

const features = [
  { icon: Target, title: 'Feature 1 ', description: 'Explain the real user problem your project addresses and why current options fall short.' },
  { icon: Layers3, title: 'Feature 2', description: 'Show how the project turns a complicated task into a clear, approachable experience.' },
  { icon: TrendingUp, title: 'Feature 3', description: 'Describe the meaningful result users get—not only the features they receive.' },
];

const steps = [
  { icon: Search, label: 'အဆင့် ၀၁', value: 'စိုက်ပျိုးလိုသော သီးနှံကို ရွေးချယ်ပါ', note: 'ဟင်းသီးဟင်းရွက်၊ သစ်သီးပင်၊ ပန်းပင် သို့မဟုတ် လယ်ယာသီးနှံကို ရှာဖွေရွေးချယ်ပါ။ သီးနှံအမည်၊ အမျိုးအစား၊ သင့်တော်သောဒေသ၊ ကြီးထွားချိန်နှင့် စိုက်ပျိုးရန်ခက်ခဲမှုအဆင့်ကို ကြည့်ရှုပါ။' },
  { icon: Wrench, label: 'အဆင့် ၀၂', value: 'စိုက်ပျိုးရန်လိုအပ်သော အခြေအနေများကို စစ်ဆေးပါ', note: 'စိုက်ပျိုးရန်သင့်တော်သောလများ၊ အပူချိန်၊ မိုးရေချိန်၊ မြေအမျိုးအစား၊ နေရောင်ခြည်၊ ရေလောင်းရမည့်အကြိမ်ရေနှင့် မြေဩဇာလိုအပ်ချက်များကို စစ်ဆေးပါ။' },
  { icon: Rocket, label: 'အဆင့် ၀၃', value: 'လမ်းညွှန်ချက်အတိုင်း စိုက်ပျိုးပါ', note: 'မြေပြင်ဆင်ခြင်းမှ စတင်၍ မျိုးစေ့ သို့မဟုတ် ပျိုးပင်ရွေးချယ်ခြင်း၊ စိုက်ပျိုးခြင်း၊ ရေလောင်းခြင်း၊ မြေဩဇာအသုံးပြုခြင်း၊ ပိုးမွှားကာကွယ်ခြင်းနှင့် ရိတ်သိမ်းခြင်းအထိ အဆင့်လိုက် လိုက်နာပါ။' },
];

const pricingTiers = [
  {
    icon: Landmark,
    label: '\u1019\u103c\u1014\u103a\u1019\u102c\u1037\u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u101b\u1031\u1038\u1018\u100f\u103a',
    price: '\u1045% - \u1048%',
    period: '/\u1010\u1005\u103a\u1014\u103e\u1005\u103a',
    description: '\u1021\u1005\u102d\u102f\u1038\u101b\u1014\u103e\u1004\u1037\u103a \u1010\u101b\u102c\u1038\u101d\u1004\u103a \u1018\u100f\u103a\u1019\u103b\u102c\u1038\u1019\u103e \u1015\u1036\u1037\u1015\u102d\u102f\u1038\u1015\u1031\u1038\u101e\u1031\u102c \u101e\u1000\u103a\u101e\u102c\u101e\u1031\u102c \u1021\u1010\u102d\u102f\u1038\u1014\u103e\u102f\u1014\u103a\u1038\u1016\u103c\u1004\u1037\u103a \u101b\u1031\u101b\u103e\u100a\u103a \u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u101b\u1031\u1038 \u1001\u103b\u1031\u1038\u1004\u103d\u1031\u104b',
    features: [
      '\u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u1019\u103c\u1031 \u1015\u102d\u102f\u1004\u103a\u1006\u102d\u102f\u1004\u103a\u1019\u103e\u102f \u1005\u102c\u1001\u103b\u102f\u1015\u103a \u101c\u102d\u102f\u1021\u1015\u103a\u101e\u100a\u103a',
      '\u101e\u1000\u103a\u101e\u102c\u101e\u1031\u102c \u1021\u1010\u102d\u102f\u1038\u1014\u103e\u102f\u1014\u103a\u1038 (\u1010\u1005\u103a\u1014\u103e\u1005\u103a\u101c\u103b\u103e\u1004\u103a \u1045% \u1019\u103e \u1048%)',
      '\u101e\u102e\u1038\u1014\u103e\u1036\u1015\u1031\u102b\u103a\u1001\u103b\u102d\u1014\u103a\u1019\u103e \u1021\u1010\u102d\u102f\u1038/\u1021\u101b\u1004\u103a\u1038 \u1006\u1015\u103a\u101b\u1014\u103a',
      '\u1021\u1005\u102d\u102f\u1038\u101b \u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u101b\u1031\u1038 \u1011\u1031\u102c\u1000\u103a\u1015\u1036\u1037\u1000\u103c\u1031\u1038\u1019\u103b\u102c\u1038 \u1015\u102b\u101d\u1004\u103a',
    ],
  },
  {
    icon: Building2,
    label: '\u1021\u101e\u1031\u1038\u1005\u102c\u1038 \u1001\u103b\u1031\u1038\u1004\u103d\u1031\u101c\u102f\u1015\u103a\u1004\u1014\u103a\u1038 (MFI)',
    price: '\u1041\u1044% - \u1042\u1048%',
    period: '/\u1010\u1005\u103a\u1014\u103e\u1005\u103a',
    description: '\u1015\u102f\u1002\u1039\u1002\u101c\u102d\u1000 \u1021\u101e\u1031\u1038\u1005\u102c\u1038 \u1004\u103d\u1031\u101b\u1031\u1038\u1000\u103c\u1031\u1038\u101b\u1031\u1038 \u1021\u1016\u103d\u1032\u1037\u1021\u1005\u100a\u103a\u1038\u1019\u103b\u102c\u1038\u1019\u103e \u1021\u1019\u103c\u1014\u103a\u101b\u101a\u1030\u1014\u102d\u102f\u1004\u103a\u101e\u1031\u102c \u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u1005\u101b\u102d\u1010\u103a \u1001\u103b\u1031\u1038\u1004\u103d\u1031\u104b',
    features: [
      '\u1021\u1015\u1031\u102b\u1004\u103a\u1015\u1005\u1039\u1005\u100a\u103a\u1038 \u1019\u101c\u102d\u102f\u1018\u1032 \u1021\u102f\u1015\u103a\u1005\u102f\u1005\u1014\u1005\u103a\u1016\u103c\u1004\u1037\u103a \u101c\u103b\u103e\u1031\u102c\u1000\u103a\u1011\u102c\u1038\u1014\u102d\u102f\u1004\u103a',
      '\u101c\u103b\u103e\u1031\u102c\u1000\u103a\u1011\u102c\u1038\u1015\u103c\u102e\u1038 \u1021\u1019\u103c\u1014\u103a\u1006\u102f\u1036\u1038 \u1021\u1010\u100a\u103a\u1015\u103c\u102f\u1015\u1031\u1038\u1001\u103c\u1004\u103a\u1038',
      '\u101c\u1005\u1009\u103a \u101e\u102d\u102f\u1037\u1019\u101f\u102f\u1010\u103a \u101e\u102e\u1038\u1014\u103e\u1036\u1015\u1031\u102b\u103a\u1001\u103b\u102d\u1014\u103a \u1015\u103c\u1014\u103a\u101c\u100a\u103a\u1015\u1031\u1038\u1006\u1015\u103a\u1014\u102d\u102f\u1004\u103a',
      '\u1019\u103b\u102d\u102f\u1038\u1005\u1031\u1037\u1014\u103e\u1004\u1037\u103a \u1019\u103c\u1031\u1029\u1007\u102c \u101d\u101a\u103a\u101a\u1030\u101b\u1014\u103a \u101e\u1004\u1037\u103a\u1010\u1031\u102c\u103a',
    ],
  },
  {
    icon: Coins,
    label: '\u1015\u102f\u1002\u1039\u1002\u101c\u102d\u1000 \u101c\u102f\u1015\u103a\u1004\u1014\u103a\u1038\u101e\u102f\u1036\u1038 \u1001\u103b\u1031\u1038\u1004\u103d\u1031',
    price: '\u1005\u102d\u1010\u103a\u1000\u103c\u102d\u102f\u1000\u103a',
    period: '/ \u100a\u103e\u102d\u1014\u103e\u102d\u102f\u1004\u103a\u1038',
    description: '\u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u101b\u1031\u1038 \u1000\u102f\u1014\u103a\u101e\u100a\u103a\u1019\u103b\u102c\u1038 \u101e\u102d\u102f\u1037\u1019\u101f\u102f\u1010\u103a \u1015\u102f\u1002\u1039\u1002\u101c\u102d\u1000 \u101b\u1004\u103a\u1038\u1014\u103e\u102e\u1038\u1019\u103c\u103e\u102f\u1015\u103a\u1014\u103e\u1036\u101e\u1030\u1019\u103b\u102c\u1038\u1011\u1036\u1019\u103e \u1021\u1011\u1030\u1038\u1015\u103c\u102f \u1001\u103b\u1031\u1038\u1004\u103d\u1031\u104b',
    features: [
      '\u101c\u102f\u1015\u103a\u1004\u1014\u103a\u1038\u1015\u1019\u102c\u100f\u1021\u101c\u102d\u102f\u1000\u103a \u1005\u102d\u1010\u103a\u1000\u103c\u102d\u102f\u1000\u103a \u1015\u1019\u102c\u100f \u101c\u103b\u103e\u1031\u102c\u1000\u103a\u1011\u102c\u1038\u1014\u102d\u102f\u1004\u103a',
      '\u1005\u1000\u103a\u1000\u102d\u101b\u102d\u101a\u102c\u1014\u103e\u1004\u1037\u103a \u1014\u100a\u103a\u1038\u1015\u100a\u102c \u101b\u1004\u103a\u1038\u1014\u103e\u102e\u1038\u1019\u103c\u103e\u102f\u1015\u103a\u1014\u103e\u1036\u1019\u103e\u102f\u1019\u103b\u102c\u1038\u1021\u1010\u103d\u1000\u103a',
      '\u101e\u102e\u1038\u1014\u103e\u1036 \u1021\u1011\u103d\u1000\u103a\u1014\u103e\u102f\u1014\u103a\u1038\u1015\u1031\u102b\u103a \u1019\u1030\u1010\u100a\u103a\u104d \u100a\u103e\u102d\u1014\u103e\u102d\u102f\u1004\u103a\u1038 \u1015\u1031\u1038\u1006\u1015\u103a\u1014\u102d\u102f\u1004\u103a',
      '\u1021\u1011\u1030\u1038 \u1021\u1010\u102d\u102f\u1038\u1014\u103e\u102f\u1014\u103a\u1038\u1014\u103e\u1004\u1037\u103a \u1001\u103b\u1031\u1038\u1004\u103d\u1031 \u1005\u100a\u103a\u1038\u1000\u1019\u103a\u1038\u1019\u103b\u102c\u1038',
    ],
  },
];

export function LandingPage() {
  return (
    <>
      <section className="hero section-border">
        <div className="container hero-inner">
          <Badge>{project.category} · Built in Talkware Meetup</Badge>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="hero-actions">
            <RouteLink href={project.primaryUrl} className="button button-default">{project.primaryAction} <ArrowRight size={16} /></RouteLink>
            <ButtonLink href="#how-it-works" variant="outline">{project.secondaryAction}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="features section-border muted-section" id="about">
        <div className="container">
          <div className="section-heading"><Badge>Why this project</Badge><h2>Show people why<br />your idea matters.</h2><p>Use these cards for the three strongest reasons someone should understand, trust, or try your project.</p></div>
          <div className="card-grid">
            {features.map(({ icon: Icon, title, description }, index) => (
              <Card key={title}><CardHeader><span className="icon-box"><Icon size={20} /></span><span className="card-number">0{index + 1}</span></CardHeader><CardContent><h3>{title}</h3><p>{description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="details section-border" id="how-it-works">
        <div className="container">
          <div className="section-heading compact-heading"><Badge>အသုံးပြုပုံ</Badge><h2>အဆင့်သုံးဆင့်ဖြင့် စိုက်ပျိုးမှုကို စတင်လိုက်ပါ။</h2></div>
          <div className="card-grid">
            {steps.map(({ icon: Icon, label, value, note }) => (
              <Card key={label} className="detail-card"><CardHeader><span className="icon-box"><Icon size={20} /></span><span className="detail-label">{label}</span></CardHeader><CardContent><h3>{value}</h3><p>{note}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing section-border muted-section" id="pricing">
  <div className="container">
    <div className="section-heading compact-heading">
      <Badge>စိုက်ပျိုးရေး ချေးငွေများ</Badge>
      <h2>သင့်စိုက်ပျိုးရေး လုပ်ငန်းအတွက်<br />သင့်တော်သည့် ချေးငွေကို ရွေးချယ်ပါ။</h2>
      <p>စိုက်ပျိုးစရိတ်မှစ၍ လုပ်ငန်းတိုးချဲ့သည်အထိ လိုအပ်သည့် ချေးငွေအမျိုးအစားကို လျှောက်ထားနိုင်ပါသည်။</p>
    </div>
    <div className="card-grid">
      {pricingTiers.map(({ icon: Icon, label, price, period, description, features }) => (
        <Card key={label} className="price-card">
          <CardHeader>
            <span className="icon-box"><Icon size={20} /></span>
            <span className="detail-label">{label}</span>
          </CardHeader>
          <CardContent>
            <div className="price-header">
              <span className="price-amount">{price}</span>
              {period && <span className="price-period">{period}</span>}
            </div>
            <p className="price-description">{description}</p>
            <ul className="price-features">
              {features.map((feature, index) => (
                <li key={index}><Check size={14} /> {feature}</li>
              ))}
            </ul>
            <ButtonLink 
              href="/loans/apply" 
              variant={label.includes('အသေးစား') ? 'default' : 'outline'} 
              className="price-button"
            >
              {label.includes('အသေးစား') ? 'အသေးစိတ် ကြည့်ရှုရန်' : 'လျှောက်ထားရန်'}
            </ButtonLink>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      <section className="register section-border" id="demo">
        <div className="container">
          <div className="register-panel">
            <div><Badge>\u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u101b\u1014\u103a \u1021\u101e\u1004\u1037\u103a\u1016\u103c\u1005\u103a\u1015\u103c\u102e\u101c\u102c\u1038</Badge><h2>\u101a\u1014\u1031\u1037 \u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a\u1019\u103e\u1005\u1010\u1004\u103a\u1015\u103c\u102e\u1038<br />\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a \u1015\u102d\u102f\u1019\u102d\u102f\u1000\u1031\u102c\u1004\u103a\u1038\u1019\u103d\u1014\u103a\u1005\u103d\u102c \u101b\u102d\u1010\u103a\u101e\u102d\u1019\u103a\u1038\u1015\u102b။</h2><p>\u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u101c\u102d\u102f\u101e\u1031\u102c \u101e\u102e\u1038\u1014\u103e\u1036\u1000\u102d\u102f \u101b\u103d\u1031\u1038\u1001\u103b\u101a\u103a\u1015\u102b၊ \u101c\u1000\u103a\u101b\u103e\u102d\u101b\u102c\u101e\u102e\u1025\u1010\u102f\u1000\u102d\u102f \u1005\u1005\u103a\u1006\u1031\u1038\u1015\u102b၊ \u1011\u102d\u102f\u1037\u1014\u1031\u102c\u1000\u103a \u1005\u1010\u1004\u103a\u101c\u1031\u1037\u101c\u102c\u101e\u1030\u1019\u103b\u102c\u1038\u1021\u1010\u103d\u1000\u103a \u1015\u103c\u1004\u103a\u1006\u1004\u103a\u1011\u102c\u1038\u101e\u1031\u102c \u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u1014\u100a\u103a\u1038\u1021\u1006\u1004\u1037\u103a\u1019\u103b\u102c\u1038\u1000\u102d\u102f \u101c\u102d\u102f\u1000\u103a\u1014\u102c\u1015\u102b။</p></div>
            <div className="hero-actions">
              <RouteLink href="/demo" className="button button-inverse">\u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u101b\u1014\u103a \u101e\u102e\u1038\u1014\u103e\u1036\u101b\u103e\u102c\u1019\u100a\u103a <ArrowRight size={16} /></RouteLink>
              <RouteLink href="/#books" className="button button-outline">\u1005\u102d\u102f\u1000\u103a\u1015\u103b\u102d\u102f\u1038\u101b\u1031\u1038\u1005\u102c\u1021\u102f\u1015\u103a\u1019\u103b\u102c\u1038 \u1016\u1010\u103a\u1019\u100a\u103a</RouteLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
