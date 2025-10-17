import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [phone, setPhone] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      toast({
        title: "Заявка принята!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setPhone('');
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <header className="bg-secondary text-white py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="font-heading text-3xl md:text-4xl tracking-wider">ПРОФМОНТАЖ</h1>
          <a href="tel:+78121234567" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Icon name="Phone" size={20} />
            <span className="hidden md:inline font-medium">+7 (812) 123-45-67</span>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/e9a65c09-6312-4fae-887d-20ffd4e64713/files/d4182808-0e6e-4e4e-853f-30d2c3435575.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block bg-primary text-primary-foreground px-4 py-2 font-heading text-lg tracking-wider transform -rotate-2">
                САНКТ-ПЕТЕРБУРГ
              </div>
              
              <h2 className="font-heading text-5xl md:text-7xl leading-tight text-secondary">
                УСТАНОВИМ ДВЕРИ ВАШЕЙ МЕЧТЫ!
              </h2>
              
              <p className="font-heading text-2xl md:text-3xl text-primary">
                КРЕПКО, ЧЕТКО, КАК ПО УСТАВУ!
              </p>
              
              <p className="text-lg md:text-xl text-foreground/80">
                Профессиональный монтаж межкомнатных дверей в Санкт-Петербурге. 
                От замеров до сдачи "под ключ" за 1 день.
              </p>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-xl px-8 py-6 h-auto transform hover:scale-105 transition-transform"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ВЫЗВАТЬ БЕСПЛАТНЫЙ ЗАМЕР!
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://cdn.poehali.dev/projects/e9a65c09-6312-4fae-887d-20ffd4e64713/files/1caf18ba-c470-4d56-84fe-2749e6be612f.jpg" 
                  alt="Мастер по установке дверей" 
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary/20 -z-0 transform rotate-45"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/30 -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-destructive/10 p-8 border-l-8 border-destructive animate-fade-in">
              <h3 className="font-heading text-3xl text-secondary mb-6">БЕЗ НАС:</h3>
              <ul className="space-y-4">
                {[
                  'Кривая установка?',
                  'Щели и скрипы?',
                  'Потратили время зря?',
                  'Дверь не закрывается?'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <Icon name="X" size={24} className="text-destructive flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 border-l-8 border-green-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-heading text-3xl text-secondary mb-6">С НАМИ:</h3>
              <ul className="space-y-4">
                {[
                  'Идеальный притвор!',
                  'Тишина и плавность хода!',
                  'Гарантия 3 года!',
                  'Работа за 1 день!'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <Icon name="Check" size={24} className="text-green-600 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-4xl md:text-5xl text-center text-secondary mb-12">
            НАШИ ПРЕИМУЩЕСТВА
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Calculator', title: 'ЧЕТКИЙ РАСЧЕТ', desc: 'Прозрачная смета без скрытых платежей' },
              { icon: 'Award', title: 'АРМЕЙСКАЯ ПРОЧНОСТЬ', desc: 'Установка на века по ГОСТу' },
              { icon: 'Sparkles', title: 'ЧИСТОТА РАБОТ', desc: 'Уберем весь мусор после себя' },
              { icon: 'Clock', title: 'БЕЗ ОПОЗДАНИЙ', desc: 'Работаем строго по графику' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-6 border-4 border-secondary transform hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="bg-primary text-primary-foreground w-16 h-16 flex items-center justify-center mb-4 clip-path-polygon">
                  <Icon name={item.icon} size={32} />
                </div>
                <h3 className="font-heading text-2xl text-secondary mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-4xl md:text-5xl text-center text-secondary mb-12">
            КАК МЫ РАБОТАЕМ
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'ЗАЯВКА', desc: 'Звоните или оставляйте заявку на сайте' },
              { num: '02', title: 'ЗАМЕР', desc: 'Бесплатный выезд замерщика в удобное время' },
              { num: '03', title: 'МОНТАЖ', desc: 'Доставка и установка двери за 1 день' },
              { num: '04', title: 'СДАЧА', desc: 'Приемка работ и оплата результата' }
            ].map((step, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 font-heading text-3xl border-4 border-secondary transform hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="font-heading text-2xl text-secondary mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/e9a65c09-6312-4fae-887d-20ffd4e64713/files/516b7772-a720-49f3-ab05-d7a3ff7e3281.jpg" 
                alt="Гарантия" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-heading text-4xl md:text-5xl">
                ГАРАНТИЯ 3 ГОДА
              </h2>
              <p className="text-xl text-white/90">
                Мы настолько уверены в качестве нашей работы, что даем официальную гарантию на 3 года!
              </p>
              <div className="space-y-4">
                {[
                  'Гарантийный талон на каждую установку',
                  'Бесплатный выезд при гарантийном случае',
                  'Ответственность за качество работ',
                  'Более 500 довольных клиентов'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={24} className="text-accent flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent transform rotate-45"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="font-heading text-4xl md:text-6xl mb-6 animate-fade-in">
            НЕ ОТКЛАДЫВАЙТЕ НА ЗАВТРА!
          </h2>
          <p className="font-heading text-2xl md:text-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            ЗАКАЖИТЕ БЕСПЛАТНЫЙ ЗАМЕР ПРЯМО СЕЙЧАС!
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-6 space-y-4">
              <Input
                type="tel"
                placeholder="Ваш телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-14 text-lg border-2 border-secondary"
                required
              />
              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-secondary font-heading text-2xl h-16 transform hover:scale-105 transition-transform"
              >
                ЖДУ ЗВОНКА!
              </Button>
              <p className="text-xs text-foreground/60">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-2xl mb-3">ПРОФМОНТАЖ</h3>
              <p className="text-white/70">Установка межкомнатных дверей в Санкт-Петербурге</p>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-3">КОНТАКТЫ</h4>
              <div className="space-y-2 text-white/70">
                <p>+7 (812) 123-45-67</p>
                <p>info@profmontazh.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-3">РЕЖИМ РАБОТЫ</h4>
              <div className="space-y-1 text-white/70">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60">
            <p>© 2024 Профмонтаж. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
