import React, { useState, useCallback, useEffect } from 'react';
import {
  Page,
  LegacyCard,
  Text,
  HorizontalStack,
  FormLayout,
  TextField,
  Button,
} from '@shopify/polaris';

function App() {
  const [m1, setM1] = useState(0);
  const [m2, setM2] = useState(0);
  const [m3, setM3] = useState(0);
  const [q1, setQ1] = useState(0);
  const [q2, setQ2] = useState(0);
  const [q3, setQ3] = useState(0);
  const [q4, setQ4] = useState(0);
  const [q5, setQ5] = useState(0);
  const [q6, setQ6] = useState(0);
  const [q7, setQ7] = useState(0);
  const [q8, setQ8] = useState(0);
  const [q9, setQ9] = useState(0);
  const [q10, setQ10] = useState(0);
  const [m4, setM4] = useState(0);
  const [m5, setM5] = useState(0);
  const [m6, setM6] = useState(0);
  const [q11, setQ11] = useState(0);
  const [q12, setQ12] = useState(0);
  const [q13, setQ13] = useState(0);
  const [q14, setQ14] = useState(0);
  const [q15, setQ15] = useState(0);
  const [q16, setQ16] = useState(0);
  const [q17, setQ17] = useState(0);
  const [q18, setQ18] = useState(0);
  const [q19, setQ19] = useState(0);
  const [q20, setQ20] = useState(0);
  const [finalNotu, setFinalNotu] = useState(0);
  const [gecmeDurumu, setGecmeDurumu] = useState(false);
  const [donem1Total, setDonem1Total] = useState(0);
  const [donem2Total, setDonem2Total] = useState(0);
  const [finalOrt, setFinalOrt] = useState(0);

  useEffect(() => {
    hesapla();
  });

  const hesapla = () => {
    const donem1Total =
      (m1 * 23) / 100 +
      (m2 * 23) / 100 +
      (m3 * 24) / 100 +
      (q1 * 3) / 100 +
      (q2 * 3) / 100 +
      (q3 * 3) / 100 +
      (q4 * 3) / 100 +
      (q5 * 3) / 100 +
      (q6 * 3) / 100 +
      (q7 * 3) / 100 +
      (q8 * 3) / 100 +
      (q9 * 3) / 100 +
      (q10 * 3) / 100;

    const donem2Total =
      (m4 * 23) / 100 +
      (m5 * 23) / 100 +
      (m6 * 24) / 100 +
      (q11 * 3) / 100 +
      (q12 * 3) / 100 +
      (q13 * 3) / 100 +
      (q14 * 3) / 100 +
      (q15 * 3) / 100 +
      (q16 * 3) / 100 +
      (q17 * 3) / 100 +
      (q18 * 3) / 100 +
      (q19 * 3) / 100 +
      (q20 * 3) / 100;

    setDonem1Total(donem1Total);
    setDonem2Total(donem2Total);

    const finalOrt =
      (donem1Total * 0.4 + donem2Total * 0.6) * 0.4 + finalNotu * 0.6;

    setFinalOrt(finalOrt);

    let gecmeDurumu = false;

    if (donem2Total >= 74.5) {
      gecmeDurumu = true;
    } else if (finalOrt >= 74.5) {
      gecmeDurumu = true;
    }

    setGecmeDurumu(gecmeDurumu);
  };

  return (
    <Page fullWidth>
      <HorizontalStack align="center">
        <LegacyCard>
          <LegacyCard.Section>
            <HorizontalStack align="center">
              <Text variant="headingXl" as="h1">
                Gazi YDYO Ortalama Hesaplama
              </Text>
            </HorizontalStack>
          </LegacyCard.Section>

          <LegacyCard.Section title="Güz Dönemi">
            <FormLayout>
              <FormLayout.Group condensed>
                <TextField
                  label="Midterm 1"
                  type="number"
                  value={m1}
                  onChange={useCallback(newValue => setM1(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Midterm 2"
                  type="number"
                  value={m2}
                  onChange={useCallback(newValue => setM2(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Midterm 3"
                  type="number"
                  value={m3}
                  onChange={useCallback(newValue => setM3(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
              </FormLayout.Group>
            </FormLayout>
            <br />
            <FormLayout>
              <FormLayout.Group condensed>
                <TextField
                  label="Quiz 1"
                  type="number"
                  value={q1}
                  onChange={useCallback(newValue => setQ1(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 2"
                  type="number"
                  value={q2}
                  onChange={useCallback(newValue => setQ2(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 3"
                  type="number"
                  value={q3}
                  onChange={useCallback(newValue => setQ3(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 4"
                  type="number"
                  value={q4}
                  onChange={useCallback(newValue => setQ4(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 5"
                  type="number"
                  value={q5}
                  onChange={useCallback(newValue => setQ5(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 6"
                  type="number"
                  value={q6}
                  onChange={useCallback(newValue => setQ6(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 7"
                  type="number"
                  value={q7}
                  onChange={useCallback(newValue => setQ7(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 8"
                  type="number"
                  value={q8}
                  onChange={useCallback(newValue => setQ8(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 9"
                  type="number"
                  value={q9}
                  onChange={useCallback(newValue => setQ9(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 10"
                  type="number"
                  value={q10}
                  onChange={useCallback(newValue => setQ10(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
              </FormLayout.Group>
            </FormLayout>
          </LegacyCard.Section>

          <LegacyCard.Section title="Bahar Dönemi">
            <FormLayout>
              <FormLayout.Group condensed>
                <TextField
                  label="Midterm 4"
                  type="number"
                  value={m4}
                  onChange={useCallback(newValue => setM4(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Midterm 5"
                  type="number"
                  value={m5}
                  onChange={useCallback(newValue => setM5(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Midterm 6"
                  type="number"
                  value={m6}
                  onChange={useCallback(newValue => setM6(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
              </FormLayout.Group>
            </FormLayout>
            <br />
            <FormLayout>
              <FormLayout.Group condensed>
                <TextField
                  label="Quiz 11"
                  type="number"
                  value={q11}
                  onChange={useCallback(newValue => setQ11(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 12"
                  type="number"
                  value={q12}
                  onChange={useCallback(newValue => setQ12(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 13"
                  type="number"
                  value={q13}
                  onChange={useCallback(newValue => setQ13(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 14"
                  type="number"
                  value={q14}
                  onChange={useCallback(newValue => setQ14(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 15"
                  type="number"
                  value={q15}
                  onChange={useCallback(newValue => setQ15(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 16"
                  type="number"
                  value={q16}
                  onChange={useCallback(newValue => setQ16(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 17"
                  type="number"
                  value={q17}
                  onChange={useCallback(newValue => setQ17(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 18"
                  type="number"
                  value={q18}
                  onChange={useCallback(newValue => setQ18(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 19"
                  type="number"
                  value={q19}
                  onChange={useCallback(newValue => setQ19(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
                <TextField
                  label="Quiz 20"
                  type="number"
                  value={q20}
                  onChange={useCallback(newValue => setQ20(newValue), [])}
                  autoComplete="off"
                  min="0"
                  max="100"
                />
              </FormLayout.Group>
            </FormLayout>
          </LegacyCard.Section>
          <LegacyCard.Section>
            <HorizontalStack align="center">
              <FormLayout>
                <FormLayout.Group condensed>
                  <TextField
                    label="Final Notu"
                    type="number"
                    value={finalNotu}
                    onChange={useCallback(
                      newValue => setFinalNotu(newValue),
                      []
                    )}
                    autoComplete="off"
                    min="0"
                    max="100"
                  />
                </FormLayout.Group>
              </FormLayout>
            </HorizontalStack>
          </LegacyCard.Section>
          <LegacyCard.Section>
            <HorizontalStack align="center">
              <FormLayout>
                <FormLayout.Group condensed>
                  <TextField
                    label="Güz Dönemi Ortalaması"
                    type="number"
                    value={donem1Total}
                    autoComplete="off"
                    disabled
                  />
                  <TextField
                    label="Bahar Dönemi Ortalaması"
                    type="number"
                    value={donem2Total}
                    autoComplete="off"
                    disabled
                  />
                  <TextField
                    label="Final Ortalaması"
                    type="number"
                    value={finalOrt}
                    autoComplete="off"
                    disabled
                  />
                </FormLayout.Group>
              </FormLayout>
            </HorizontalStack>
          </LegacyCard.Section>
          <LegacyCard.Section>
            <HorizontalStack align="center">
              <Button
                primary={gecmeDurumu ? true : false}
                destructive={gecmeDurumu ? false : true}
                fullWidth
              >
                {gecmeDurumu ? 'Geçti' : 'Hazırlık'}
              </Button>
            </HorizontalStack>
          </LegacyCard.Section>
          <LegacyCard.Section>
            <HorizontalStack align="center">
              <Text variant="headingSm" as="h6">
                Gazi YDYO ❤️ Tunahan AYDIN 💌 t.unahana06@gmail.com
              </Text>
            </HorizontalStack>
          </LegacyCard.Section>
        </LegacyCard>
      </HorizontalStack>
    </Page>
  );
}

export default App;
