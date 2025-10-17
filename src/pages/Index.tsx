import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [phone, setPhone] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <h1 className="font-heading text-3xl md:text-4xl tracking-wider">ГЛАВМОНТАЖ</h1>
          <a href="tel:+78127771817" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Icon name="Phone" size={20} />
            <span className="hidden md:inline font-medium">8 (812) 777-18-17</span>
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
                Качественная установка "под ключ" за 1 день.
              </p>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-xl px-8 py-6 h-auto transform hover:scale-105 transition-transform"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ЗАКАЗАТЬ УСТАНОВКУ ДВЕРЕЙ!
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
                  'Гарантия 1 год!',
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
              { num: '02', title: 'СОГЛАСОВАНИЕ', desc: 'Уточнение деталей и расчет стоимости' },
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

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary text-primary-foreground px-6 py-2 mb-4 transform rotate-2">
              <p className="font-heading text-xl tracking-wider">ПРОИЗВОДСТВЕННЫЙ</p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-secondary">
              ПРАЙС-ЛИСТ
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Честные цены без накруток
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-background border-4 border-secondary p-6">
              <h3 className="font-heading text-3xl text-secondary mb-6 flex items-center gap-3">
                <Icon name="Wrench" size={32} className="text-primary" />
                СТАНДАРТНЫЕ ВИДЫ РАБОТ
              </h3>
              
              <div className="space-y-4">
                <div className="bg-accent/20 border-l-4 border-accent p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-heading text-2xl text-secondary mb-2">Установка дверного блока</h4>
                      <div className="inline-block bg-accent text-secondary px-3 py-1 font-heading text-sm mb-3">
                        АКЦИЯ!
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-heading text-3xl text-primary">3 850 ₽</div>
                    </div>
                  </div>
                  <p className="text-sm font-semibold mb-2">В установку входит:</p>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    <li>• врезка 2-х петель, врезка ручки</li>
                    <li>• сборка дверной коробки, установка дверного блока</li>
                    <li>• установка наличника с 2-х сторон</li>
                  </ul>
                </div>

                {[
                  { title: 'Наценка за установку белой двери (в том числе эмаль)', price: '600' },
                  { title: 'Установка откатной двери в готовый проем', price: '4 900' },
                  { title: 'Установка нестандартной межкомнатной двери', price: '4 100' },
                  { title: 'Скрытая установка', subtitle: 'Не будет видно крепежа, коробка останется без следов монтажа.', price: '750' },
                  { title: 'Установка скрытой (Invisible) двери', price: '4 850' },
                  { title: 'Установка скрытых петель', price: '750' },
                  { title: 'Регулировка скрытых петель', price: '300' },
                  { title: 'Демонтаж старой двери (деревянный)', price: '650' },
                  { title: 'Установка портала', price: '3 500' },
                  { title: 'Выезд мастера на установку одной межкомнатной двери', price: '1 550' },
                  { title: 'Платная парковка на 1 день (там, где это необходимо)', price: '1 000' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start py-3 border-b border-secondary/20">
                    <div className="flex-1">
                      <p className="font-medium text-secondary">{item.title}</p>
                      {item.subtitle && <p className="text-sm text-foreground/60 mt-1">{item.subtitle}</p>}
                    </div>
                    <div className="font-heading text-xl text-primary ml-4 whitespace-nowrap">{item.price} ₽</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background border-4 border-secondary p-6">
              <h3 className="font-heading text-3xl text-secondary mb-6 flex items-center gap-3">
                <Icon name="Settings" size={32} className="text-primary" />
                ДОПОЛНИТЕЛЬНЫЕ РАБОТЫ
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: 'Установка 1-го комплекта доборного бруса', price: '1 200' },
                  { title: 'Сращивание доборного бруса', price: '1 000' },
                  { title: 'Установка 1-го комплекта доборного бруса со стороны петель', subtitle: 'С обратной, нестандартной стороны. Не рекомендуется.', price: '3 500' },
                  { title: 'Установка порога', price: '600' },
                  { title: 'Врезка замка с ключевиной', price: '800' },
                  { title: 'Установка нестандартных наличников (фигурных или широких) - за один проем', price: '500' },
                  { title: 'Врезка сантехнического замка', price: '800' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start py-3 border-b border-secondary/20">
                    <div className="flex-1">
                      <p className="font-medium text-secondary">{item.title}</p>
                      {item.subtitle && <p className="text-sm text-foreground/60 mt-1">{item.subtitle}</p>}
                    </div>
                    <div className="font-heading text-xl text-primary ml-4 whitespace-nowrap">{item.price} ₽</div>
                  </div>
                ))}

                <div className="pt-3">
                  <p className="font-medium text-secondary mb-3">Расширение/уменьшение проёма</p>
                  <p className="text-sm text-foreground/60 mb-3 italic">в зависимости от сложности</p>
                  <div className="space-y-2 pl-4">
                    <div className="flex justify-between items-center py-2">
                      <p className="text-secondary">Материал стен: пеноблок</p>
                      <div className="font-heading text-xl text-primary whitespace-nowrap">от 500 ₽</div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <p className="text-secondary">Материал стен: кирпич</p>
                      <div className="font-heading text-xl text-primary whitespace-nowrap">от 1 500 ₽</div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <p className="text-secondary">Материал стен: ж/б</p>
                      <div className="font-heading text-xl text-primary whitespace-nowrap">от 2 000 ₽</div>
                    </div>
                  </div>
                </div>

                {[
                  { title: 'Уменьшение полотна двери с одной стороны', price: '950' },
                  { title: 'Пропил вдоль деревянного наличника (одна стойка)', price: '350' },
                  { title: 'Врезка дополнительной фурнитуры (ригель, петля, стопор)', price: '250' },
                  { title: 'Выезд установщика в пригород (дальше, чем КАД)', price: '60 ₽ за 1 км' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start py-3 border-b border-secondary/20">
                    <div className="flex-1">
                      <p className="font-medium text-secondary">{item.title}</p>
                    </div>
                    <div className="font-heading text-xl text-primary ml-4 whitespace-nowrap">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              className="bg-accent hover:bg-accent/90 text-secondary font-heading text-2xl py-8 px-12 border-4 border-secondary transform hover:scale-105 transition-transform"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Calculator" size={28} className="mr-3" />
              РАССЧИТАТЬ СТОИМОСТЬ
            </Button>
          </div>

          <div className="mt-12 bg-accent/20 border-l-8 border-accent p-6">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={32} className="text-accent flex-shrink-0" />
              <div>
                <h3 className="font-heading text-2xl text-secondary mb-2">ВАЖНАЯ ИНФОРМАЦИЯ</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Гарантия на все работы 1 год</li>
                  <li>• Оплата только после полной сдачи работ</li>
                  <li>• Работаем с наличными и картами</li>
                  <li>• Установка межкомнатных дверей в Санкт-Петербурге</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="bg-secondary text-white px-6 py-2 transform -rotate-2 inline-block">
                <p className="font-heading text-xl tracking-wider">ДОКУМЕНТАЛЬНОЕ ПОДТВЕРЖДЕНИЕ</p>
              </div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-secondary">
              НАШИ РАБОТЫ
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              500+ выполненных проектов по всему городу
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                img: 'https://cdn.poehali.dev/files/dd1bf77b-6928-4718-a1a0-5efe54e7b68b.jpg',
                title: 'Белые двери',
                desc: 'Современный стиль'
              },
              {
                img: 'https://cdn.poehali.dev/files/dd1bf77b-6928-4718-a1a0-5efe54e7b68b.jpg',
                title: 'Двойная установка',
                desc: 'Классика'
              },
              {
                img: 'https://cdn.poehali.dev/files/dd1bf77b-6928-4718-a1a0-5efe54e7b68b.jpg',
                title: 'Идеальные углы',
                desc: 'Премиум качество'
              },
              {
                img: 'https://cdn.poehali.dev/files/dd1bf77b-6928-4718-a1a0-5efe54e7b68b.jpg',
                title: 'Чистая работа',
                desc: 'Минимализм'
              }
            ].map((work, i) => (
              <div 
                key={i}
                className="group relative overflow-hidden border-4 border-secondary animate-fade-in hover:border-primary transition-colors"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={work.img} 
                    alt={work.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary via-secondary/95 to-transparent p-4">
                  <h3 className="font-heading text-2xl text-white">{work.title}</h3>
                  <p className="text-white/80">{work.desc}</p>
                </div>

                <div className="absolute top-4 right-4 bg-accent text-secondary w-12 h-12 rounded-full flex items-center justify-center font-heading text-xl transform rotate-12 group-hover:rotate-0 transition-transform">
                  ✓
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary text-primary-foreground p-6 text-center transform hover:scale-105 transition-transform">
              <div className="font-heading text-5xl mb-2">500+</div>
              <p className="text-lg">Установленных дверей</p>
            </div>
            <div className="bg-accent text-secondary p-6 text-center transform hover:scale-105 transition-transform">
              <div className="font-heading text-5xl mb-2">8</div>
              <p className="text-lg">Лет на рынке</p>
            </div>
            <div className="bg-secondary text-white p-6 text-center transform hover:scale-105 transition-transform">
              <div className="font-heading text-5xl mb-2">100%</div>
              <p className="text-lg">Довольных клиентов</p>
            </div>
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
                ГАРАНТИЯ 1 ГОД
              </h2>
              <p className="text-xl text-white/90">
                Мы настолько уверены в качестве нашей работы, что даем официальную гарантию на 1 год!
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary text-primary-foreground px-6 py-2 mb-4 transform rotate-1">
              <p className="font-heading text-xl tracking-wider">ОТВЕТЫ НА ВОПРОСЫ</p>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-secondary">
              ЧАСТЫЕ ВОПРОСЫ
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Сколько времени занимает установка одной двери?',
                a: 'Стандартная установка межкомнатной двери занимает 2-3 часа. Если требуется демонтаж старой двери или дополнительные работы, время может увеличиться до 4-5 часов. Мы всегда работаем быстро, но качественно!'
              },
              {
                q: 'Нужно ли мне покупать дверь заранее?',
                a: 'Необязательно! Мы можем помочь с выбором и заказом двери у проверенных поставщиков. Наш замерщик приедет, произведет точные замеры и поможет подобрать оптимальный вариант под ваш бюджет и интерьер.'
              },
              {
                q: 'Входит ли в стоимость установка фурнитуры?',
                a: 'Да, установка базовой фурнитуры (ручки, защелки, петли) входит в стоимость монтажа. Если вы хотите установить дополнительную фурнитуру (замки, доводчики), это обсуждается отдельно при замере.'
              },
              {
                q: 'Какая гарантия на работы?',
                a: 'Мы предоставляем официальную гарантию 1 год на все монтажные работы. Выдаем гарантийный талон с печатью. Если в течение гарантийного срока возникнут проблемы по нашей вине — устраним бесплатно!'
              },
              {
                q: 'Работаете ли вы в выходные?',
                a: 'Да, мы работаем 7 дней в неделю! В выходные график: с 10:00 до 18:00. Можем приехать в удобное для вас время, включая вечерние часы по будням (до 20:00).'
              },
              {
                q: 'Что делать, если дверь не подойдет по размеру?',
                a: 'Именно поэтому мы настаиваем на бесплатном замере! Наш специалист произведет точные измерения проема, учтет все нюансы и подберет дверь идеально подходящего размера. Ошибки исключены.'
              },
              {
                q: 'Убираете ли вы мусор после работы?',
                a: 'Обязательно! Уборка территории после монтажа входит в стоимость услуги. Мы вынесем весь строительный мусор, упаковку и оставим после себя чистоту. Вам не придется ничего убирать!'
              },
              {
                q: 'Какие районы Санкт-Петербурга вы обслуживаете?',
                a: 'Мы работаем по всему Санкт-Петербургу и ближайшим пригородам (до 30 км от КАД). Выезд замерщика бесплатный по всей территории города. Для уточнения возможности выезда в отдаленные районы — позвоните нам!'
              }
            ].map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border-4 border-secondary bg-background px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center flex-shrink-0 font-heading text-xl">
                      ?
                    </div>
                    <span className="font-heading text-xl text-secondary">{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 pr-4 pb-6 text-lg text-foreground/80">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-accent/20 border-4 border-accent p-8 text-center">
            <h3 className="font-heading text-3xl text-secondary mb-4">
              НЕ НАШЛИ ОТВЕТ НА СВОЙ ВОПРОС?
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              Позвоните нам или оставьте заявку — ответим на все вопросы!
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-xl px-8 py-6 h-auto"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ЗАДАТЬ ВОПРОС
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-heading text-4xl md:text-5xl text-center text-secondary mb-4">
            ОТЗЫВЫ ТОВАРИЩЕЙ
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Более 500 довольных клиентов по всему Санкт-Петербургу
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Алексей Петров',
                address: 'ул. Ленина, д. 45',
                text: 'Установили 4 двери за один день! Работают четко, как часы. Ни пылинки после себя не оставили. Рекомендую!',
                rating: 5
              },
              {
                name: 'Мария Соколова',
                address: 'Невский пр., д. 123',
                text: 'Профессионалы своего дела! Двери встали идеально, ни одной щели. Гарантийный талон выдали сразу. Спасибо за качество!',
                rating: 5
              },
              {
                name: 'Дмитрий Иванов',
                address: 'пр. Просвещения, д. 78',
                text: 'Приехали точно в срок, сделали быстро и аккуратно. Цена соответствует качеству. Буду обращаться еще!',
                rating: 5
              }
            ].map((review, i) => (
              <div 
                key={i} 
                className="bg-white border-4 border-accent p-6 relative animate-fade-in transform hover:scale-105 transition-transform"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center font-heading text-2xl transform rotate-12">
                  !
                </div>
                
                <div className="mb-4">
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, j) => (
                      <Icon key={j} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <h3 className="font-heading text-2xl text-secondary">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.address}</p>
                </div>
                
                <p className="text-foreground/80 italic">"{review.text}"</p>
                
                <div className="mt-4 pt-4 border-t-2 border-primary">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} className="text-green-600" />
                    <span className="text-sm font-medium text-green-600">ПРОВЕРЕННЫЙ ОТЗЫВ</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-secondary text-white px-8 py-4 transform -rotate-1">
              <p className="font-heading text-2xl">СРЕДНЯЯ ОЦЕНКА: 5.0 ★★★★★</p>
              <p className="text-white/80">На основе 500+ отзывов</p>
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
              <h3 className="font-heading text-2xl mb-3">ГЛАВМОНТАЖ</h3>
              <p className="text-white/70">Установка межкомнатных дверей в Санкт-Петербурге</p>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-3">КОНТАКТЫ</h4>
              <div className="space-y-2 text-white/70">
                <p>8 (812) 777-18-17</p>
                <p>info@glavmontazh.ru</p>
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
            <p>© 2024 Главмонтаж. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground w-14 h-14 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all z-50 border-4 border-secondary"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={28} />
        </button>
      )}
    </div>
  );
};

export default Index;