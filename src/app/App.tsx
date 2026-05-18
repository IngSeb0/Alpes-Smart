import { useState } from "react";
import {
  CreditCard,
  CheckCircle2,
  ChevronRight,
  Shield,
  Lock,
  Scan,
  FileCheck,
  Wallet,
  Download,
  ExternalLink,
  Check,
  Sparkles,
  TrendingUp,
  Heart,
  Car,
  AlertCircle,
  MessageCircle,
  Settings,
  Info,
  Database,
  Brain,
  Activity
} from "lucide-react";
import { PrimaryButton } from "./components/PrimaryButton";
import { SecondaryButton } from "./components/SecondaryButton";
import { ProgressStepper } from "./components/ProgressStepper";
import { SecurityNotice } from "./components/SecurityNotice";
import { ConsentCheckbox } from "./components/ConsentCheckbox";
import { SuccessState } from "./components/SuccessState";
import { ChatBubble } from "./components/ChatBubble";
import { DataPreferenceToggle } from "./components/DataPreferenceToggle";

type Screen =
  | "00_Alpes_Smart_Finance_Hub"
  | "01_Home_Oferta_Preaprobada"
  | "02_Resumen_Oferta"
  | "02A_Terminos_Oferta"
  | "03_Consentimiento_Datos"
  | "03A_Configurar_Permisos"
  | "04_Validacion_Identidad"
  | "04A_Validacion_OTP"
  | "05_Firma_Digital"
  | "06_Registro_Blockchain"
  | "06A_Comprobante_Blockchain"
  | "07_Activacion_Exitosa"
  | "01_Dashboard_Financiero"
  | "02_Insight_Detectado"
  | "03_Oferta_Personalizada"
  | "03A_Alternativas_Financieras"
  | "04_Por_Que_Recibo_Esto"
  | "05_Simulador_Cuota"
  | "06_Asistente_GenAI"
  | "07_Centro_Preferencias"
  | "07A_Politica_Datos"
  | "08_Decision_Final"
  | "08_Producto_Activo"
  | "99_Prototype_Overview";

type Overlay =
  | "Overlay_Oferta_Guardada"
  | "Overlay_Resumen_Descargado"
  | "Overlay_Recomendacion_Descartada"
  | "Overlay_Simulacion_Actualizada"
  | "Overlay_Simulacion_Guardada"
  | "Overlay_Nueva_Pregunta_AI"
  | "Overlay_Recordatorio_Programado"
  | "Overlay_Oferta_Descartada"
  | "Overlay_Producto_Agregado";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("00_Alpes_Smart_Finance_Hub");
  const [overlay, setOverlay] = useState<Overlay | null>(null);
  const [history, setHistory] = useState<Screen[]>(["00_Alpes_Smart_Finance_Hub"]);
  const [consents, setConsents] = useState({
    financial: false,
    behavioral: false,
    recommendations: false,
  });
  const [contractAccepted, setContractAccepted] = useState(false);
  const [amount, setAmount] = useState(45000000);
  const [months, setMonths] = useState(48);
  const [preferences, setPreferences] = useState({
    recommendations: true,
    commerceData: true,
    pushNotifications: true,
    emailFinancial: false,
    anonymousData: true,
  });

  const allConsentsAccepted = consents.financial && consents.behavioral && consents.recommendations;

  const calculateQuota = (amt: number, mon: number) => {
    const rate = 0.016;
    const quota = (amt * rate * Math.pow(1 + rate, mon)) / (Math.pow(1 + rate, mon) - 1);
    return Math.round(quota / 1000) * 1000;
  };

  const quota = calculateQuota(amount, months);
  const navigate = (screen: Screen) => {
    setHistory((prev) => [...prev, screen]);
    setCurrentScreen(screen);
    setOverlay(null);
  };
  const goHome = () => navigate("00_Alpes_Smart_Finance_Hub");
  const goBack = () => {
    const explicitBack: Partial<Record<Screen, Screen>> = {
      "02_Resumen_Oferta": "01_Home_Oferta_Preaprobada",
      "02A_Terminos_Oferta": "02_Resumen_Oferta",
      "03_Consentimiento_Datos": "02_Resumen_Oferta",
      "03A_Configurar_Permisos": "03_Consentimiento_Datos",
      "04_Validacion_Identidad": "03_Consentimiento_Datos",
      "04A_Validacion_OTP": "04_Validacion_Identidad",
      "05_Firma_Digital": "04_Validacion_Identidad",
      "06_Registro_Blockchain": "05_Firma_Digital",
      "06A_Comprobante_Blockchain": "06_Registro_Blockchain",
      "07_Activacion_Exitosa": "06_Registro_Blockchain",
      "01_Dashboard_Financiero": "00_Alpes_Smart_Finance_Hub",
      "02_Insight_Detectado": "01_Dashboard_Financiero",
      "03_Oferta_Personalizada": "02_Insight_Detectado",
      "03A_Alternativas_Financieras": "03_Oferta_Personalizada",
      "04_Por_Que_Recibo_Esto": "03_Oferta_Personalizada",
      "05_Simulador_Cuota": "04_Por_Que_Recibo_Esto",
      "06_Asistente_GenAI": "05_Simulador_Cuota",
      "07_Centro_Preferencias": "06_Asistente_GenAI",
      "07A_Politica_Datos": "07_Centro_Preferencias",
      "08_Decision_Final": "07_Centro_Preferencias",
      "08_Producto_Activo": "07_Activacion_Exitosa",
      "99_Prototype_Overview": "00_Alpes_Smart_Finance_Hub",
    };
    const target = explicitBack[currentScreen];
    if (target) {
      navigate(target);
      return;
    }
    const fallback = history[history.length - 2];
    if (fallback) {
      navigate(fallback);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      {/* iPhone 14 Frame */}
      <div className="w-[390px] h-[844px] bg-background rounded-[3rem] border-[14px] border-[#1f2937] shadow-2xl overflow-hidden relative">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-primary z-50">
          <div className="flex items-center justify-between px-8 pt-3">
            <span className="text-xs text-white">9:41</span>
            <div className="w-24 h-6 bg-[#1f2937] rounded-full" />
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 border border-white/60 rounded-sm" />
              <div className="w-1 h-1.5 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>

        {currentScreen !== "00_Alpes_Smart_Finance_Hub" && (
          <div className="absolute top-12 left-4 right-4 z-40 flex items-center justify-between">
            <button onClick={goBack} className="text-xs px-3 py-1.5 rounded-full bg-white/90 border border-border text-foreground">
              Volver
            </button>
            <button onClick={goHome} className="text-xs px-3 py-1.5 rounded-full bg-white/90 border border-border text-foreground">
              Inicio
            </button>
          </div>
        )}

        {/* Screen Content */}
        <div className="h-full overflow-y-auto pt-11 pb-8">
          {currentScreen === "00_Alpes_Smart_Finance_Hub" && (
            <Screen00_Hub
              onStartOnboarding={() => navigate("01_Home_Oferta_Preaprobada")}
              onStartIntelligence={() => navigate("01_Dashboard_Financiero")}
              onOpenOverview={() => navigate("99_Prototype_Overview")}
            />
          )}
          {currentScreen === "01_Home_Oferta_Preaprobada" && (
            <Screen01_Home onContinue={() => navigate("02_Resumen_Oferta")} onSkip={() => setOverlay("Overlay_Oferta_Guardada")} />
          )}
          {currentScreen === "02_Resumen_Oferta" && (
            <Screen02_Resumen onContinue={() => navigate("03_Consentimiento_Datos")} onTerms={() => navigate("02A_Terminos_Oferta")} />
          )}
          {currentScreen === "02A_Terminos_Oferta" && (
            <SimpleScreen
              title="Términos de la oferta"
              primaryLabel="Aceptar términos"
              secondaryLabel="Volver al resumen"
              onPrimary={() => navigate("03_Consentimiento_Datos")}
              onSecondary={() => navigate("02_Resumen_Oferta")}
            />
          )}
          {currentScreen === "03_Consentimiento_Datos" && (
            <Screen03_Consentimiento
              consents={consents}
              onConsentsChange={setConsents}
              onContinue={() => navigate("04_Validacion_Identidad")}
              allConsentsAccepted={allConsentsAccepted}
              onConfigurePermissions={() => navigate("03A_Configurar_Permisos")}
            />
          )}
          {currentScreen === "03A_Configurar_Permisos" && (
            <SimpleScreen
              title="Configurar permisos"
              primaryLabel="Guardar permisos"
              secondaryLabel="Volver"
              onPrimary={() => navigate("04_Validacion_Identidad")}
              onSecondary={() => navigate("03_Consentimiento_Datos")}
            />
          )}
          {currentScreen === "04_Validacion_Identidad" && (
            <Screen04_Validacion onContinue={() => navigate("05_Firma_Digital")} onUseOtp={() => navigate("04A_Validacion_OTP")} />
          )}
          {currentScreen === "04A_Validacion_OTP" && (
            <SimpleScreen
              title="Validación por código OTP"
              primaryLabel="Confirmar código"
              secondaryLabel="Volver a biometría"
              tertiaryLabel="Reenviar código"
              onPrimary={() => navigate("05_Firma_Digital")}
              onSecondary={() => navigate("04_Validacion_Identidad")}
              onTertiary={() => navigate("04A_Validacion_OTP")}
            />
          )}
          {currentScreen === "05_Firma_Digital" && (
            <Screen05_Firma
              contractAccepted={contractAccepted}
              onContractChange={setContractAccepted}
              onContinue={() => navigate("06_Registro_Blockchain")}
              onDownload={() => setOverlay("Overlay_Resumen_Descargado")}
            />
          )}
          {currentScreen === "06_Registro_Blockchain" && (
            <Screen06_Blockchain onContinue={() => navigate("07_Activacion_Exitosa")} onViewReceipt={() => navigate("06A_Comprobante_Blockchain")} />
          )}
          {currentScreen === "06A_Comprobante_Blockchain" && (
            <SimpleScreen
              title="Comprobante en blockchain"
              primaryLabel="Continuar activación"
              secondaryLabel="Volver"
              onPrimary={() => navigate("07_Activacion_Exitosa")}
              onSecondary={() => navigate("06_Registro_Blockchain")}
            />
          )}
          {currentScreen === "07_Activacion_Exitosa" && (
            <Screen07_Activacion
              onHome={goHome}
              onViewProduct={() => navigate("08_Producto_Activo")}
              onReceipt={() => navigate("06A_Comprobante_Blockchain")}
            />
          )}
          {currentScreen === "08_Producto_Activo" && (
            <Screen08_ProductoActivo
              onAddToWallet={() => setOverlay("Overlay_Producto_Agregado")}
              onViewReceipt={() => navigate("06A_Comprobante_Blockchain")}
              onHome={goHome}
              onDashboard={() => navigate("01_Dashboard_Financiero")}
            />
          )}
          {currentScreen === "01_Dashboard_Financiero" && (
            <Screen01_Dashboard onContinue={() => navigate("02_Insight_Detectado")} />
          )}
          {currentScreen === "02_Insight_Detectado" && (
            <Screen02_Insight onContinue={() => navigate("03_Oferta_Personalizada")} onDismiss={() => setOverlay("Overlay_Recomendacion_Descartada")} />
          )}
          {currentScreen === "03_Oferta_Personalizada" && (
            <Screen03_Oferta onContinue={() => navigate("04_Por_Que_Recibo_Esto")} onAlternatives={() => navigate("03A_Alternativas_Financieras")} />
          )}
          {currentScreen === "03A_Alternativas_Financieras" && (
            <SimpleScreen
              title="Alternativas financieras"
              primaryLabel="Elegir crédito vehículo"
              secondaryLabel="Volver a oferta"
              onPrimary={() => navigate("04_Por_Que_Recibo_Esto")}
              onSecondary={() => navigate("03_Oferta_Personalizada")}
            />
          )}
          {currentScreen === "04_Por_Que_Recibo_Esto" && (
            <Screen04_Explicacion onContinue={() => navigate("05_Simulador_Cuota")} onEditData={() => navigate("07_Centro_Preferencias")} />
          )}
          {currentScreen === "05_Simulador_Cuota" && (
            <Screen05_Simulador
              amount={amount}
              months={months}
              quota={quota}
              onAmountChange={setAmount}
              onMonthsChange={setMonths}
              onCalculate={() => setOverlay("Overlay_Simulacion_Actualizada")}
              onSaveSimulation={() => setOverlay("Overlay_Simulacion_Guardada")}
            />
          )}
          {currentScreen === "06_Asistente_GenAI" && (
            <Screen06_GenAI onContinue={() => navigate("07_Centro_Preferencias")} onNewQuestion={() => setOverlay("Overlay_Nueva_Pregunta_AI")} />
          )}
          {currentScreen === "07_Centro_Preferencias" && (
            <Screen07_Preferencias
              preferences={preferences}
              onPreferencesChange={setPreferences}
              onContinue={() => navigate("08_Decision_Final")}
              onPrivacyPolicy={() => navigate("07A_Politica_Datos")}
            />
          )}
          {currentScreen === "07A_Politica_Datos" && (
            <SimpleScreen
              title="Política de datos"
              primaryLabel="Aceptar política"
              secondaryLabel="Volver a preferencias"
              onPrimary={() => navigate("08_Decision_Final")}
              onSecondary={() => navigate("07_Centro_Preferencias")}
            />
          )}
          {currentScreen === "08_Decision_Final" && (
            <Screen08_Decision
              onAccept={() => navigate("03_Consentimiento_Datos")}
              onHome={goHome}
              onResimulate={() => navigate("05_Simulador_Cuota")}
              onLater={() => setOverlay("Overlay_Recordatorio_Programado")}
              onDismiss={() => setOverlay("Overlay_Oferta_Descartada")}
              onAlternatives={() => navigate("03A_Alternativas_Financieras")}
            />
          )}
          {currentScreen === "99_Prototype_Overview" && <Screen99_Overview />}
        </div>
        <OverlayModal
          overlay={overlay}
          onClose={() => setOverlay(null)}
          onNavigate={navigate}
          onHome={goHome}
        />
      </div>
    </div>
  );
}

function Screen00_Hub({
  onStartOnboarding,
  onStartIntelligence,
  onOpenOverview
}: {
  onStartOnboarding: () => void;
  onStartIntelligence: () => void;
  onOpenOverview: () => void;
}) {
  return (
    <div className="px-6 py-8 h-full flex flex-col bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary via-primary to-[#1e3a5f] flex items-center justify-center mx-auto mb-5 shadow-xl">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-foreground text-3xl mb-2">Alpes Smart Finance</h1>
        <p className="text-muted-foreground">
          Finanzas inteligentes, seguras y personalizadas
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-5">
        {/* Card 1: Onboarding */}
        <button
          onClick={onStartOnboarding}
          className="group bg-white rounded-3xl border-2 border-border shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 p-7 text-left"
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <FileCheck className="w-8 h-8 text-success" />
            </div>
            <div className="flex-1">
              <h2 className="text-foreground text-lg mb-2">Onboarding Digital Seguro</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Acepta, firma y activa productos financieros en minutos con consentimiento trazable.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t-2 border-border/50">
            <span className="text-primary">Iniciar onboarding</span>
            <ChevronRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
          </div>
        </button>

        {/* Card 2: Intelligence */}
        <button
          onClick={onStartIntelligence}
          className="group bg-white rounded-3xl border-2 border-border shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 p-7 text-left"
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-foreground text-lg mb-2">Motor de Inteligencia Financiera</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recibe recomendaciones financieras personalizadas, explicables y basadas en datos autorizados.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t-2 border-border/50">
            <span className="text-primary">Ver recomendación inteligente</span>
            <ChevronRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
          </div>
        </button>
      </div>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-border/50">
        <div className="mb-4 rounded-xl border border-primary/20 bg-primary/5 p-3">
          <p className="text-xs text-foreground mb-1">Demo académico</p>
          <p className="text-xs text-muted-foreground">
            Este prototipo demuestra dos capacidades: recomendación financiera inteligente y onboarding digital seguro.
          </p>
          <div className="mt-2 inline-flex px-2 py-1 rounded-full text-[10px] border border-primary/30 text-primary">
            Cloud + Blockchain + Big Data + GenAI
          </div>
        </div>
        <button onClick={onOpenOverview} className="w-full mb-3 text-xs text-primary underline">
          Ver overview de prototipo
        </button>
        <div className="flex items-center justify-center gap-2 mb-3">
          <Shield className="w-4 h-4 text-success" />
          <p className="text-xs text-muted-foreground">Tecnología bancaria segura y confiable</p>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Alpes Smart Finance © 2026
        </p>
      </div>
    </div>
  );
}

function Screen01_Home({ onContinue, onSkip }: { onContinue: () => void; onSkip: () => void }) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-foreground text-2xl">Hola, Laura</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Main Offer Card */}
        <div className="bg-gradient-to-br from-[#0f1729] via-[#1a2849] to-[#1e3a5f] rounded-3xl p-6 mb-5 text-white shadow-xl">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-gold" />
                <span className="text-xs uppercase tracking-wide text-gold">Oferta especial</span>
              </div>
              <h2 className="text-xl mb-3">Tienes una oferta preaprobada</h2>
              <p className="text-sm opacity-90 leading-relaxed">
                Puedes activar tu nueva Tarjeta Alpes Black en minutos, sin llamadas ni documentos físicos.
              </p>
            </div>
          </div>
        </div>

        {/* Product Details Card */}
        <div className="bg-white rounded-2xl border border-border shadow-md p-6 mb-5">
          <div className="flex items-center gap-4 mb-5 pb-5 border-b border-border">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-foreground text-lg mb-1">Tarjeta Alpes Black</h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-gold/15 text-gold-foreground border border-gold/30">
                <Sparkles className="w-3 h-3" />
                Premium
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Cupo aprobado</span>
              <span className="text-xl text-primary">$8.000.000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Beneficio especial</span>
              <span className="text-sm text-success">3 meses sin cuota de manejo</span>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-xs text-foreground/80">
              Oferta generada con datos autorizados y validada por Banco de Los Alpes
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onContinue} fullWidth>
          Ver oferta
        </PrimaryButton>
        <SecondaryButton onClick={onSkip} fullWidth>
          Ahora no
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-4">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen02_Resumen({ onContinue, onTerms }: { onContinue: () => void; onTerms: () => void }) {
  const steps = [
    { label: "Oferta", completed: true },
    { label: "Datos", completed: false },
    { label: "Identidad", completed: false },
    { label: "Firma", completed: false },
    { label: "Activación", completed: false },
  ];

  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-foreground text-xl">Resumen de tu oferta</h1>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <ProgressStepper steps={steps} currentStep={0} />
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Offer Card */}
        <div className="bg-white rounded-2xl border border-border shadow-md p-6 mb-5">
          <div className="flex items-center gap-4 mb-5 pb-5 border-b border-border">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-primary to-[#1e3a5f] flex items-center justify-center shadow-md">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-foreground text-lg">Tarjeta Alpes Black</h3>
              <span className="text-xs text-muted-foreground">Producto premium</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Cupo aprobado</span>
              <span className="text-xl text-primary">$8.000.000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Tasa estimada</span>
              <span className="text-foreground">2,1% M.V.</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Cuota de manejo</span>
              <span className="text-success">$0 por 3 meses</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Beneficio</span>
              <span className="text-sm text-foreground">Cashback 1% en aliados</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Tiempo estimado
              </span>
              <span className="text-foreground">5 minutos</span>
            </div>
          </div>
        </div>

        {/* Info Notice */}
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">
              Revisa las condiciones antes de continuar.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onContinue} fullWidth>
          Continuar
        </PrimaryButton>
        <SecondaryButton onClick={onTerms} fullWidth>
          Ver términos
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen03_Consentimiento({
  consents,
  onConsentsChange,
  onContinue,
  allConsentsAccepted,
  onConfigurePermissions
}: {
  consents: { financial: boolean; behavioral: boolean; recommendations: boolean };
  onConsentsChange: (consents: any) => void;
  onContinue: () => void;
  allConsentsAccepted: boolean;
  onConfigurePermissions: () => void;
}) {
  const steps = [
    { label: "Oferta", completed: true },
    { label: "Datos", completed: false },
    { label: "Identidad", completed: false },
    { label: "Firma", completed: false },
    { label: "Activación", completed: false },
  ];

  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-foreground text-xl">Autoriza el uso de tus datos</h1>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <ProgressStepper steps={steps} currentStep={1} />
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Explanation Card */}
        <div className="bg-white rounded-2xl border border-border shadow-md p-6 mb-6">
          <div className="flex gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-foreground mb-2">¿Cómo usamos tus datos?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Usaremos tus datos financieros, transaccionales y de aliados autorizados para validar esta oferta, activar el producto y mejorar tus recomendaciones.
              </p>
            </div>
          </div>
        </div>

        {/* Consent Items */}
        <div className="space-y-4 mb-6">
          <ConsentCheckbox
            checked={consents.financial}
            onChange={(checked) => onConsentsChange({ ...consents, financial: checked })}
            label="Autorizo el uso de mis datos financieros para validar la oferta."
            required
          />
          <ConsentCheckbox
            checked={consents.behavioral}
            onChange={(checked) => onConsentsChange({ ...consents, behavioral: checked })}
            label="Autorizo consultar datos de comportamiento en canales digitales."
            required
          />
          <ConsentCheckbox
            checked={consents.recommendations}
            onChange={(checked) => onConsentsChange({ ...consents, recommendations: checked })}
            label="Autorizo recibir recomendaciones personalizadas."
            required
          />
        </div>

        {/* Privacy Notice */}
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
          <div className="flex gap-3">
            <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">
              Puedes cambiar estas preferencias cuando quieras en el Centro de Privacidad.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onContinue} fullWidth disabled={!allConsentsAccepted}>
          Autorizar datos
        </PrimaryButton>
        <SecondaryButton onClick={onConfigurePermissions} fullWidth>
          Configurar permisos
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen04_Validacion({ onContinue, onUseOtp }: { onContinue: () => void; onUseOtp: () => void }) {
  const steps = [
    { label: "Oferta", completed: true },
    { label: "Datos", completed: true },
    { label: "Identidad", completed: false },
    { label: "Firma", completed: false },
    { label: "Activación", completed: false },
  ];

  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-foreground text-xl">Valida tu identidad</h1>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <ProgressStepper steps={steps} currentStep={2} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-border shadow-md p-8 mb-6 text-center">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-5 shadow-sm">
            <Scan className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-foreground text-lg mb-2">Para proteger tu cuenta</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Necesitamos confirmar que eres tú.
          </p>

          {/* Method Card */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-4 mb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <Scan className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-foreground">Validación facial</p>
                  <p className="text-xs text-success">Recomendado</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-primary" />
            </div>
          </div>

          <div className="bg-secondary border border-border rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-foreground">Código OTP</p>
                  <p className="text-xs text-muted-foreground">Por SMS</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="p-4 rounded-xl border border-success/20 bg-success/5">
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground mb-1">Proceso seguro</p>
              <p className="text-xs text-muted-foreground">
                Tus datos biométricos se procesan de forma segura y no se comparten con terceros.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onContinue} fullWidth>
          Validar identidad
        </PrimaryButton>
        <SecondaryButton onClick={onUseOtp} fullWidth>
          Usar código OTP
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen05_Firma({
  contractAccepted,
  onContractChange,
  onContinue,
  onDownload
}: {
  contractAccepted: boolean;
  onContractChange: (checked: boolean) => void;
  onContinue: () => void;
  onDownload: () => void;
}) {
  const steps = [
    { label: "Oferta", completed: true },
    { label: "Datos", completed: true },
    { label: "Identidad", completed: true },
    { label: "Firma", completed: false },
    { label: "Activación", completed: false },
  ];

  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-foreground text-xl">Firma digital</h1>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <ProgressStepper steps={steps} currentStep={3} />
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Contract Summary Card */}
        <div className="bg-white rounded-2xl border border-border shadow-md p-6 mb-6">
          <div className="flex items-center gap-4 mb-5 pb-5 border-b border-border">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-[#1e3a5f] flex items-center justify-center shadow-md">
              <FileCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-foreground text-lg">Resumen contractual</h3>
              <span className="text-xs text-muted-foreground">Condiciones finales</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Producto</span>
              <span className="text-foreground">Tarjeta Alpes Black</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Cupo</span>
              <span className="text-xl text-primary">$8.000.000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Tasa</span>
              <span className="text-foreground">2,1% M.V.</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Fecha de activación</span>
              <span className="text-foreground">Hoy</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Canal</span>
              <span className="text-sm text-foreground">App Alpes Smart Finance</span>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 mb-6">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">
              Al firmar, aceptas las condiciones del producto y autorizas su activación digital.
            </p>
          </div>
        </div>

        {/* Consent */}
        <div className="mb-5">
          <ConsentCheckbox
            checked={contractAccepted}
            onChange={onContractChange}
            label="He leído y acepto el resumen contractual."
            required
          />
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onContinue} fullWidth disabled={!contractAccepted}>
          Firmar digitalmente
        </PrimaryButton>
        <SecondaryButton onClick={onDownload} fullWidth>
          Descargar resumen
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen06_Blockchain({ onContinue, onViewReceipt }: { onContinue: () => void; onViewReceipt: () => void }) {
  const steps = [
    { label: "Oferta", completed: true },
    { label: "Datos", completed: true },
    { label: "Identidad", completed: true },
    { label: "Firma", completed: true },
    { label: "Activación", completed: false },
  ];

  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-foreground text-xl">Consentimiento registrado</h1>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <ProgressStepper steps={steps} currentStep={4} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {/* Success Icon */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center mb-5 shadow-lg">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
          <h2 className="text-foreground text-lg mb-2">Tu consentimiento y firma</h2>
          <p className="text-muted-foreground">
            fueron registrados con trazabilidad Blockchain
          </p>
        </div>

        {/* Audit Information Card */}
        <div className="bg-white rounded-2xl border border-border shadow-md p-6 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-foreground text-lg">Información de auditoría</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <span className="text-sm text-muted-foreground">Código de auditoría</span>
              <span className="text-sm text-primary font-mono">ALP-BC-2026-000184</span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-sm text-muted-foreground">Fecha</span>
              <span className="text-sm text-foreground">15 mayo 2026</span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-sm text-muted-foreground">Estado</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 text-success text-sm border border-success/20">
                <Check className="w-3.5 h-3.5" />
                Verificado
              </span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-sm text-muted-foreground">Hash de registro</span>
              <span className="text-xs text-foreground font-mono bg-secondary px-2 py-1 rounded">9F3A...B72C</span>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-4 rounded-xl border border-success/20 bg-success/5">
          <div className="flex gap-3">
            <Lock className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">
              Este registro permite verificar que el proceso fue seguro, transparente y no alterado.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onContinue} fullWidth>
          Continuar
        </PrimaryButton>
        <SecondaryButton onClick={onViewReceipt} fullWidth>
          Ver comprobante
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen07_Activacion({
  onHome,
  onViewProduct,
  onReceipt
}: {
  onHome: () => void;
  onViewProduct: () => void;
  onReceipt: () => void;
}) {
  const steps = [
    { label: "Oferta", completed: true },
    { label: "Datos", completed: true },
    { label: "Identidad", completed: true },
    { label: "Firma", completed: true },
    { label: "Activación", completed: true },
  ];

  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-foreground text-xl">Producto activado</h1>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <ProgressStepper steps={steps} currentStep={4} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {/* Success State */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center mb-5 shadow-xl">
            <CheckCircle2 className="w-14 h-14 text-success" />
          </div>
          <h2 className="text-foreground text-lg mb-2">Tu Tarjeta Alpes Black</h2>
          <p className="text-2xl text-success">está activa</p>
        </div>

        {/* Details Card */}
        <div className="bg-gradient-to-br from-[#0f1729] via-[#1a2849] to-[#1e3a5f] rounded-3xl p-7 mb-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-sm opacity-80 mb-1">Cupo disponible</p>
              <h2 className="text-4xl">$8.000.000</h2>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <CreditCard className="w-7 h-7" />
            </div>
          </div>
          <div className="pt-5 border-t border-white/20">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Estado del producto</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/20 border border-success/30 text-success">
                <Check className="w-3.5 h-3.5" />
                Activa
              </span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl border border-border shadow-md p-6 mb-5">
          <h3 className="text-foreground mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            Detalles de activación
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Próximo paso</span>
              <span className="text-sm text-foreground">Agregar a billetera digital</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Tiempo total del proceso</span>
              <span className="inline-flex items-center gap-1 text-sm text-success">
                <CheckCircle2 className="w-4 h-4" />
                5 minutos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onViewProduct} fullWidth>
          Ver producto activo
        </PrimaryButton>
        <SecondaryButton onClick={onHome} fullWidth>
          Ir al inicio
        </SecondaryButton>
        <button onClick={onReceipt} className="w-full text-center text-sm text-primary underline">
          Revisar comprobante
        </button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen01_Dashboard({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Tu salud financiera</p>
        <h1 className="text-foreground text-2xl">Hola, Laura</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-card rounded-2xl border border-border shadow-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                <Heart className="w-4 h-4 text-success" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-1">Salud financiera</p>
            <p className="text-2xl text-foreground">82/100</p>
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-primary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-1">Cupo disponible</p>
            <p className="text-xl text-foreground">$8.000.000</p>
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-gold" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-1">Ahorro mensual</p>
            <p className="text-xl text-foreground">$650.000</p>
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-sm p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-blue-700" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-1">Productos activos</p>
            <p className="text-2xl text-foreground">3</p>
          </div>
        </div>

        {/* Recommendation Card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5" />
                <h3>Recomendación destacada</h3>
              </div>
              <p className="text-sm opacity-90 mb-3">
                Podrías financiar tu próximo vehículo con una cuota ajustada a tu perfil.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30">
                <Brain className="w-3.5 h-3.5" />
                <span className="text-xs">Basado en Customer DNA</span>
              </div>
            </div>
            <Car className="w-10 h-10 opacity-80 flex-shrink-0 ml-3" />
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-5">
        <PrimaryButton onClick={onContinue} fullWidth>
          Ver recomendación
        </PrimaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen02_Insight({ onContinue, onDismiss }: { onContinue: () => void; onDismiss: () => void }) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-foreground text-xl">Detectamos una oportunidad</h1>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Insight Card */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-5 mb-5">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Car className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-foreground mb-2">Posible compra de vehículo</h2>
              <p className="text-sm text-muted-foreground">
                Identificamos señales de interés en comercios aliados y movimientos recientes compatibles con una decisión de movilidad.
              </p>
            </div>
          </div>

          {/* Data Sources */}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-3">Fuentes de datos</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs">
                <Database className="w-3.5 h-3.5 text-primary" />
                Datos financieros autorizados
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs">
                <Activity className="w-3.5 h-3.5 text-primary" />
                Historial transaccional
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs">
                <TrendingUp className="w-3.5 h-3.5 text-primary" />
                Comercios aliados
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs">
                <Shield className="w-3.5 h-3.5 text-primary" />
                Perfil de riesgo
              </span>
            </div>
          </div>
        </div>

        {/* Transparency Notice */}
        <div className="p-4 rounded-xl border border-success/20 bg-success/5 mb-5">
          <div className="flex gap-3">
            <Lock className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              Solo usamos datos que autorizaste previamente.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <PrimaryButton onClick={onContinue} fullWidth>
          Ver detalle
        </PrimaryButton>
        <SecondaryButton onClick={onDismiss} fullWidth>
          No me interesa
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen03_Oferta({ onContinue, onAlternatives }: { onContinue: () => void; onAlternatives: () => void }) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-foreground text-xl">Oferta personalizada</h1>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Product Card */}
        <div className="bg-gradient-to-br from-[#0f1729] to-[#1e3a5f] rounded-2xl p-5 text-white shadow-lg mb-5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-xl mb-1">Crédito Vehículo Alpes</h2>
              <p className="text-sm opacity-80">Diseñado para ti</p>
            </div>
            <Car className="w-10 h-10 opacity-90 flex-shrink-0" />
          </div>
        </div>

        {/* Details Card */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-5 mb-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Monto preevaluado</span>
              <span className="text-lg text-foreground">$45.000.000</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Plazo sugerido</span>
              <span className="text-foreground">48 meses</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Cuota estimada</span>
              <span className="text-lg text-foreground">$1.390.000</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="text-sm text-muted-foreground">Tasa estimada</span>
              <span className="text-foreground">1,6% M.V.</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-muted-foreground">Probabilidad de aprobación</span>
              <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm border border-success/20">
                Alta
              </span>
            </div>
          </div>
        </div>

        {/* Info Notice */}
        <div className="p-4 rounded-xl border border-border bg-secondary/50">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Esta oferta fue diseñada según tu capacidad de pago y comportamiento financiero.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-5">
        <PrimaryButton onClick={onContinue} fullWidth>
          Entender oferta
        </PrimaryButton>
        <SecondaryButton onClick={onAlternatives} fullWidth>
          Ver alternativas
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen04_Explicacion({ onContinue, onEditData }: { onContinue: () => void; onEditData: () => void }) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-foreground text-xl">¿Por qué recibo esta oferta?</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Explanation Cards */}
        <div className="space-y-3 mb-5">
          {[
            { icon: <CheckCircle2 className="w-5 h-5 text-success" />, text: "Tienes buen comportamiento de pago." },
            { icon: <TrendingUp className="w-5 h-5 text-success" />, text: "Tus ingresos soportan una cuota estimada." },
            { icon: <Car className="w-5 h-5 text-success" />, text: "Detectamos señales de interés en movilidad." },
            { icon: <Shield className="w-5 h-5 text-success" />, text: "Tu nivel de endeudamiento está dentro del rango recomendado." },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl border border-border shadow-sm p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-sm text-foreground flex-1 pt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GenAI Explanation */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-5 mb-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-foreground mb-2 flex items-center gap-2">
                Alpes AI
                <Sparkles className="w-4 h-4 text-primary" />
              </h3>
              <p className="text-sm text-muted-foreground">
                Esta recomendación busca ayudarte a financiar un vehículo sin comprometer tu estabilidad financiera.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Message */}
        <div className="p-4 rounded-xl border border-border bg-secondary/50">
          <div className="flex gap-3">
            <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Puedes cambiar tus preferencias de datos cuando quieras.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-5">
        <PrimaryButton onClick={onContinue} fullWidth>
          Entiendo
        </PrimaryButton>
        <SecondaryButton onClick={onEditData} fullWidth>
          Editar mis datos
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen05_Simulador({
  amount,
  months,
  quota,
  onAmountChange,
  onMonthsChange,
  onCalculate,
  onSaveSimulation
}: {
  amount: number;
  months: number;
  quota: number;
  onAmountChange: (value: number) => void;
  onMonthsChange: (value: number) => void;
  onCalculate: () => void;
  onSaveSimulation: () => void;
}) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Activity className="w-5 h-5 text-primary" />
        </div>
        <h1 className="text-foreground text-xl">Simula tu cuota</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Simulator Card */}
        <div className="bg-white rounded-2xl border border-border shadow-md p-6 mb-6">
          <div className="space-y-6">
            {/* Amount */}
            <div>
              <label className="text-sm text-muted-foreground mb-3 block flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                Monto
              </label>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-5 mb-3">
                <p className="text-3xl text-primary">${(amount / 1000000).toFixed(1)}M</p>
              </div>
              <input
                type="range"
                min="20000000"
                max="60000000"
                step="5000000"
                value={amount}
                onChange={(e) => onAmountChange(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            {/* Months */}
            <div>
              <label className="text-sm text-muted-foreground mb-3 block flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Plazo
              </label>
              <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-xl p-5 mb-3">
                <p className="text-3xl text-foreground">{months} meses</p>
              </div>
              <input
                type="range"
                min="12"
                max="60"
                step="12"
                value={months}
                onChange={(e) => onMonthsChange(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            {/* Result */}
            <div className="pt-5 border-t-2 border-border">
              <label className="text-sm text-muted-foreground mb-3 block">Cuota mensual estimada</label>
              <div className="bg-gradient-to-br from-primary via-primary to-[#1e3a5f] rounded-2xl p-6 shadow-lg">
                <p className="text-4xl text-white">${(quota / 1000).toFixed(0)}K</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Seguro incluido</span>
                <span className="text-sm text-success">Sí</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Primer pago</span>
                <span className="text-sm text-foreground">30 días</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Notice */}
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">
              Si reduces el plazo a 36 meses, pagarías menos intereses.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onCalculate} fullWidth>
          Calcular
        </PrimaryButton>
        <SecondaryButton onClick={onSaveSimulation} fullWidth>
          Guardar simulación
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen06_GenAI({ onContinue, onNewQuestion }: { onContinue: () => void; onNewQuestion: () => void }) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <h1 className="text-foreground text-xl">Asistente financiero</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* AI Intro */}
        <div className="mb-5">
          <div className="flex justify-start">
            <div className="max-w-[85%]">
              <div className="bg-white border border-border shadow-md rounded-2xl rounded-bl-sm p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-primary">Alpes AI</span>
                  <Sparkles className="w-4 h-4 text-gold ml-auto" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  Hola, soy Alpes AI. Puedo explicarte esta oferta en palabras simples.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="mb-5">
          <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
            <MessageCircle className="w-3.5 h-3.5" />
            Preguntas frecuentes
          </p>
          <div className="space-y-3">
            {[
              "¿Por qué esta cuota?",
              "¿Qué pasa si cambio el plazo?",
              "¿Esta oferta afecta mi historial?",
            ].map((question, i) => (
              <button
                key={i}
                className="w-full text-left px-5 py-4 rounded-xl border border-border bg-white hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm"
              >
                <p className="text-sm text-foreground">{question}</p>
              </button>
            ))}
          </div>
        </div>

        {/* AI Response */}
        <div className="mb-4">
          <div className="flex justify-start">
            <div className="max-w-[90%]">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl rounded-bl-sm p-5 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-primary">Alpes AI</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  Esta cuota se calcula con el monto, plazo, tasa estimada y tu capacidad de pago. Puedes ajustar el plazo para encontrar una cuota más cómoda.
                </p>
              </div>
              <p className="text-xs text-muted-foreground mt-2 ml-3">Ahora</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onContinue} fullWidth>
          Continuar
        </PrimaryButton>
        <SecondaryButton onClick={onNewQuestion} fullWidth>
          Hacer otra pregunta
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen07_Preferencias({
  preferences,
  onPreferencesChange,
  onContinue,
  onPrivacyPolicy
}: {
  preferences: any;
  onPreferencesChange: (prefs: any) => void;
  onContinue: () => void;
  onPrivacyPolicy: () => void;
}) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-foreground text-xl">Centro de preferencias</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Controla qué datos usas para recibir recomendaciones.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Toggles */}
        <div className="bg-card rounded-2xl border border-border shadow-sm divide-y divide-border">
          <DataPreferenceToggle
            label="Recomendaciones personalizadas"
            description="Recibe ofertas ajustadas a tu perfil financiero."
            defaultEnabled={preferences.recommendations}
            onChange={(enabled) => onPreferencesChange({ ...preferences, recommendations: enabled })}
          />
          <DataPreferenceToggle
            label="Datos de comercios aliados"
            description="Usa información de tus compras para mejores ofertas."
            defaultEnabled={preferences.commerceData}
            onChange={(enabled) => onPreferencesChange({ ...preferences, commerceData: enabled })}
          />
          <DataPreferenceToggle
            label="Notificaciones push"
            description="Alertas sobre ofertas y estado de productos."
            defaultEnabled={preferences.pushNotifications}
            onChange={(enabled) => onPreferencesChange({ ...preferences, pushNotifications: enabled })}
          />
          <DataPreferenceToggle
            label="Email financiero"
            description="Resumen mensual de tu actividad financiera."
            defaultEnabled={preferences.emailFinancial}
            onChange={(enabled) => onPreferencesChange({ ...preferences, emailFinancial: enabled })}
          />
          <DataPreferenceToggle
            label="Uso de datos agregados anónimos"
            description="Ayuda a mejorar el servicio sin exponer tu identidad."
            defaultEnabled={preferences.anonymousData}
            onChange={(enabled) => onPreferencesChange({ ...preferences, anonymousData: enabled })}
          />
        </div>

        {/* Security Message */}
        <div className="mt-5 p-4 rounded-xl border border-success/20 bg-success/5">
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              Nunca vendemos tus datos personales. Las recomendaciones se generan con datos autorizados.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-5">
        <PrimaryButton onClick={onContinue} fullWidth>
          Guardar preferencias
        </PrimaryButton>
        <SecondaryButton onClick={onPrivacyPolicy} fullWidth>
          Ver política de datos
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen08_Decision({
  onAccept,
  onHome,
  onResimulate,
  onLater,
  onDismiss,
  onAlternatives
}: {
  onAccept: () => void;
  onHome: () => void;
  onResimulate: () => void;
  onLater: () => void;
  onDismiss: () => void;
  onAlternatives: () => void;
}) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-foreground text-xl">Decide cómo continuar</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Final Offer Card */}
        <div className="bg-gradient-to-br from-[#0f1729] via-[#1a2849] to-[#1e3a5f] rounded-3xl p-6 text-white shadow-xl mb-6">
          <div className="flex items-start justify-between mb-5">
            <div className="flex-1">
              <h2 className="text-xl mb-2">Crédito Vehículo Alpes</h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/20 border border-success/30 text-xs">
                <Check className="w-3.5 h-3.5" />
                Preevaluado
              </span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Car className="w-7 h-7" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Monto</span>
              <span className="text-2xl">$45.000.000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Plazo</span>
              <span className="text-lg">48 meses</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">Cuota mensual</span>
              <span className="text-2xl">$1.390.000</span>
            </div>
          </div>
        </div>

        {/* Decision Options */}
        <div className="space-y-3 mb-6">
          <button onClick={onAccept} className="w-full px-6 py-5 rounded-2xl border-2 border-success bg-success/10 hover:bg-success/15 transition-all shadow-md text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center shadow-md">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-foreground">Aceptar oferta</p>
                  <p className="text-xs text-muted-foreground">Continuar con el proceso</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-success" />
            </div>
          </button>

          <button onClick={onLater} className="w-full px-6 py-5 rounded-2xl border border-border bg-white hover:bg-secondary transition-all shadow-sm text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground">Recordarme después</p>
                  <p className="text-xs text-muted-foreground">Te notificaremos en 7 días</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </div>
          </button>

          <button onClick={onDismiss} className="w-full px-6 py-5 rounded-2xl border border-border bg-white hover:bg-secondary transition-all shadow-sm text-left">
            <div className="flex items-center justify-between">
              <p className="text-foreground">No me interesa</p>
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </div>
          </button>

          <button onClick={onAlternatives} className="w-full px-6 py-5 rounded-2xl border border-border bg-white hover:bg-secondary transition-all shadow-sm text-left">
            <div className="flex items-center justify-between">
              <p className="text-foreground">Ver alternativas</p>
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </div>
          </button>
        </div>

        {/* Info Message */}
        <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
          <div className="flex gap-3">
            <Brain className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">
              Tu decisión ayuda a mejorar futuras recomendaciones con IA.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onAccept} fullWidth>
          Aceptar oferta
        </PrimaryButton>
        <SecondaryButton onClick={onLater} fullWidth>
          Recordarme después
        </SecondaryButton>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Alpes Smart Finance
      </p>
    </div>
  );
}

function Screen08_ProductoActivo({
  onAddToWallet,
  onViewReceipt,
  onHome,
  onDashboard
}: {
  onAddToWallet: () => void;
  onViewReceipt: () => void;
  onHome: () => void;
  onDashboard: () => void;
}) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-foreground text-xl">Tarjeta Alpes Black</h1>
        <p className="text-sm text-muted-foreground">Producto activo</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="bg-gradient-to-br from-[#0f1729] via-[#1a2849] to-[#1e3a5f] rounded-3xl p-6 text-white shadow-xl mb-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between"><span className="text-sm opacity-80">Estado</span><span>Activa</span></div>
            <div className="flex items-center justify-between"><span className="text-sm opacity-80">Cupo total</span><span>$8.000.000</span></div>
            <div className="flex items-center justify-between"><span className="text-sm opacity-80">Cupo disponible</span><span>$8.000.000</span></div>
            <div className="flex items-center justify-between"><span className="text-sm opacity-80">Fecha de activación</span><span>Hoy</span></div>
            <div className="flex items-center justify-between"><span className="text-sm opacity-80">Beneficio activo</span><span>3 meses sin cuota de manejo</span></div>
            <div className="flex items-center justify-between"><span className="text-sm opacity-80">Cashback</span><span>1% en comercios aliados</span></div>
            <div className="flex items-center justify-between"><span className="text-sm opacity-80">Código de auditoría</span><span className="font-mono text-xs">ALP-BC-2026-000184</span></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
          <h3 className="text-foreground mb-4">Acciones disponibles</h3>
          <div className="space-y-3">
            <PrimaryButton onClick={onAddToWallet} fullWidth>Agregar a billetera digital</PrimaryButton>
            <SecondaryButton onClick={onViewReceipt} fullWidth>Ver comprobante Blockchain</SecondaryButton>
            <SecondaryButton onClick={onHome} fullWidth>Ir al inicio</SecondaryButton>
            <SecondaryButton onClick={onDashboard} fullWidth>Ver recomendación inteligente</SecondaryButton>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-3">Alpes Smart Finance</p>
    </div>
  );
}

function Screen99_Overview() {
  const onboarding = [
    "01_Home_Oferta_Preaprobada",
    "02_Resumen_Oferta",
    "03_Consentimiento_Datos",
    "04_Validacion_Identidad",
    "05_Firma_Digital",
    "06_Registro_Blockchain",
    "07_Activacion_Exitosa",
    "08_Producto_Activo",
  ];
  const inteligencia = [
    "01_Dashboard_Financiero",
    "02_Insight_Detectado",
    "03_Oferta_Personalizada",
    "04_Por_Que_Recibo_Esto",
    "05_Simulador_Cuota",
    "06_Asistente_GenAI",
    "07_Centro_Preferencias",
    "08_Decision_Final",
  ];

  return (
    <div className="px-6 py-6 h-full overflow-y-auto">
      <h1 className="text-foreground text-xl mb-5">99_Prototype_Overview</h1>
      <h2 className="text-sm text-primary mb-3">Flujo 1 — Onboarding Digital Seguro</h2>
      <div className="grid grid-cols-1 gap-2 mb-6">
        {onboarding.map((s) => <div key={s} className="text-xs bg-white border border-border rounded-lg p-3">{s}</div>)}
      </div>
      <h2 className="text-sm text-primary mb-3">Flujo 2 — Motor de Inteligencia Financiera</h2>
      <div className="grid grid-cols-1 gap-2">
        {inteligencia.map((s) => <div key={s} className="text-xs bg-white border border-border rounded-lg p-3">{s}</div>)}
      </div>
    </div>
  );
}

function SimpleScreen({
  title,
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
  onPrimary,
  onSecondary,
  onTertiary
}: {
  title: string;
  primaryLabel: string;
  secondaryLabel: string;
  tertiaryLabel?: string;
  onPrimary: () => void;
  onSecondary: () => void;
  onTertiary?: () => void;
}) {
  return (
    <div className="px-6 py-6 h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-foreground text-xl">{title}</h1>
      </div>
      <div className="flex-1" />
      <div className="space-y-3 pt-6">
        <PrimaryButton onClick={onPrimary} fullWidth>{primaryLabel}</PrimaryButton>
        <SecondaryButton onClick={onSecondary} fullWidth>{secondaryLabel}</SecondaryButton>
        {tertiaryLabel && onTertiary && (
          <SecondaryButton onClick={onTertiary} fullWidth>{tertiaryLabel}</SecondaryButton>
        )}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-3">Alpes Smart Finance</p>
    </div>
  );
}

function OverlayModal({
  overlay,
  onClose,
  onNavigate,
  onHome
}: {
  overlay: Overlay | null;
  onClose: () => void;
  onNavigate: (screen: Screen) => void;
  onHome: () => void;
}) {
  if (!overlay) return null;

  const config: Record<Overlay, { title: string; description?: string; primary: { label: string; action: () => void }; secondary: { label: string; action: () => void } }> = {
    Overlay_Oferta_Guardada: {
      title: "Oferta guardada",
      primary: { label: "Volver al inicio", action: onHome },
      secondary: { label: "Ver recomendación inteligente", action: () => onNavigate("01_Dashboard_Financiero") }
    },
    Overlay_Resumen_Descargado: {
      title: "Resumen descargado",
      primary: { label: "Continuar firma", action: onClose },
      secondary: { label: "Firmar digitalmente", action: () => onNavigate("06_Registro_Blockchain") }
    },
    Overlay_Recomendacion_Descartada: {
      title: "Recomendación descartada",
      primary: { label: "Volver al inicio", action: onHome },
      secondary: { label: "Ver otra recomendación", action: () => onNavigate("01_Dashboard_Financiero") }
    },
    Overlay_Simulacion_Actualizada: {
      title: "Simulación actualizada",
      primary: { label: "Continuar", action: () => onNavigate("06_Asistente_GenAI") },
      secondary: { label: "Volver al simulador", action: () => onNavigate("05_Simulador_Cuota") }
    },
    Overlay_Simulacion_Guardada: {
      title: "Simulación guardada",
      primary: { label: "Continuar", action: () => onNavigate("06_Asistente_GenAI") },
      secondary: { label: "Volver al simulador", action: () => onNavigate("05_Simulador_Cuota") }
    },
    Overlay_Nueva_Pregunta_AI: {
      title: "Nueva pregunta registrada",
      primary: { label: "Continuar", action: () => onNavigate("07_Centro_Preferencias") },
      secondary: { label: "Volver al chat", action: () => onNavigate("06_Asistente_GenAI") }
    },
    Overlay_Recordatorio_Programado: {
      title: "Recordatorio programado",
      primary: { label: "Ir al inicio", action: onHome },
      secondary: { label: "Volver a decisión", action: () => onNavigate("08_Decision_Final") }
    },
    Overlay_Oferta_Descartada: {
      title: "Oferta descartada",
      primary: { label: "Ir al inicio", action: onHome },
      secondary: { label: "Ver otra recomendación", action: () => onNavigate("01_Dashboard_Financiero") }
    },
    Overlay_Producto_Agregado: {
      title: "Producto agregado",
      description: "Tu Tarjeta Alpes Black fue agregada a tu billetera digital.",
      primary: { label: "Ver producto", action: () => onNavigate("08_Producto_Activo") },
      secondary: { label: "Ir al inicio", action: onHome }
    }
  };

  const item = config[overlay];
  return (
    <div className="absolute inset-0 z-50 bg-black/40 flex items-end">
      <div className="w-full bg-white rounded-t-3xl p-6 border-t border-border">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-foreground">{item.title}</h3>
          <button onClick={onClose} className="text-sm text-muted-foreground">Cerrar</button>
        </div>
        {item.description && <p className="text-sm text-muted-foreground mb-4">{item.description}</p>}
        <div className="space-y-3">
          <PrimaryButton onClick={item.primary.action} fullWidth>{item.primary.label}</PrimaryButton>
          <SecondaryButton onClick={item.secondary.action} fullWidth>{item.secondary.label}</SecondaryButton>
          {overlay === "Overlay_Oferta_Descartada" && (
            <SecondaryButton onClick={() => onNavigate("08_Decision_Final")} fullWidth>Volver a decisión</SecondaryButton>
          )}
        </div>
      </div>
    </div>
  );
}













