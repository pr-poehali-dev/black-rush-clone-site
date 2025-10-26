import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const flavors = [
    {
      name: "NEON STORM",
      description: "Классический вкус с цитрусовым ударом",
      color: "from-green-500 to-emerald-600",
      icon: "Zap"
    },
    {
      name: "ARCTIC BLAST",
      description: "Ледяная свежесть мяты",
      color: "from-cyan-500 to-blue-600",
      icon: "Snowflake"
    },
    {
      name: "FIRE CHARGE",
      description: "Взрывной тропический микс",
      color: "from-orange-500 to-red-600",
      icon: "Flame"
    }
  ];

  const energyFacts = [
    { value: "200", unit: "мг", label: "Кофеина", icon: "Bolt" },
    { value: "0", unit: "г", label: "Сахара", icon: "Ban" },
    { value: "5", unit: "ккал", label: "Энергии", icon: "Activity" },
    { value: "100", unit: "%", label: "Заряда", icon: "Battery" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://cdn.poehali.dev/projects/0e811d61-fcdb-4245-a0b2-6d8f2dac31ac/files/60c38208-353e-4e45-8c3e-f522d6bee134.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-60"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold neon-glow text-primary leading-none">
                BLACK<br/>RUSH
              </h1>
              <p className="text-2xl md:text-3xl text-secondary blue-glow font-semibold">
                ЗАРЯД ЧИСТОЙ ЭНЕРГИИ
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Мощный энергетический напиток для тех, кто не останавливается на достигнутом. 
                Максимум кофеина, ноль сахара, 100% адреналина.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-8 py-6 neon-border">
                  <Icon name="ShoppingCart" className="mr-2" size={24} />
                  КУПИТЬ СЕЙЧАС
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8 py-6">
                  <Icon name="MapPin" className="mr-2" size={24} />
                  ГДЕ КУПИТЬ
                </Button>
              </div>
            </div>
            
            <div className="relative flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/0e811d61-fcdb-4245-a0b2-6d8f2dac31ac/files/4545df57-784d-48de-bfdd-3de89dec1bdd.jpg" 
                alt="Black Rush Energy Drink"
                className="max-w-md w-full drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/10 blur-3xl animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 neon-glow text-primary">
            ВЫБЕРИ СВОЙ ВКУС
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16">
            Три легендарных вкуса для любой ситуации
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {flavors.map((flavor, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-to-br from-card to-muted border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${flavor.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={flavor.icon as any} size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3 text-foreground">{flavor.name}</h3>
                <p className="text-muted-foreground text-lg">{flavor.description}</p>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-black font-bold">
                  ПОПРОБОВАТЬ
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/0e811d61-fcdb-4245-a0b2-6d8f2dac31ac/files/7bc08752-2528-4581-a220-3713edd69db3.jpg"
              alt="Линейка Black Rush"
              className="max-w-4xl w-full mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 blue-glow text-secondary">
            ЭНЕРГИЯ В ЦИФРАХ
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {energyFacts.map((fact, index) => (
              <div 
                key={index}
                className="text-center space-y-4 p-6 bg-card rounded-lg border border-border hover:border-secondary transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name={fact.icon as any} size={32} className="text-secondary" />
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary neon-glow">
                    {fact.value}
                  </div>
                  <div className="text-2xl text-muted-foreground font-semibold">{fact.unit}</div>
                </div>
                <div className="text-lg text-foreground font-medium">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-glow text-primary">
            ГОТОВ К ЗАРЯДУ?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Найди BLACK RUSH в ближайшем магазине или закажи онлайн прямо сейчас
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold text-xl px-10 py-7 neon-border">
              <Icon name="ShoppingBag" className="mr-2" size={28} />
              ЗАКАЗАТЬ ОНЛАЙН
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-xl px-10 py-7">
              <Icon name="Store" className="mr-2" size={28} />
              НАЙТИ МАГАЗИН
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-3xl font-bold neon-glow text-primary">BLACK RUSH</div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 BLACK RUSH. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
