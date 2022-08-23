import Box from '@mui/material/Box';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import { Howl } from 'howler';
import Q from "./sound/Q.mp3"
import W from "./sound/W.mp3"
import E from "./sound/E.mp3"
import A from "./sound/A.mp3"
import S from "./sound/S.mp3"
import D from "./sound/D.mp3"
import Z from "./sound/Z.mp3"
import X from "./sound/X.mp3"
import C from "./sound/C.mp3"

const Keys = ["Q", "W", "E", 'A', "S", "D", "Z", "X", "C"]

function App() {
  const [powerOn, setPowerOn] = useState(true)
  const [volume, setVolume] = useState(0.3)
  function soundPlay(src, volume) {
    const sound = new Howl({
      preload: true,
      volume,
      src
    })
    sound.play()
  }
  function handleClick(key) {
    if (powerOn) {

      switch (key) {
        case "Q":
          soundPlay(Q, volume);
          break

        case "W":
          soundPlay(W, volume);
          break

        case "E":
          soundPlay(E, volume);
          break

        case "A":
          soundPlay(A, volume);
          break

        case "S":
          soundPlay(S, volume);
          break

        case "D":
          soundPlay(D, volume);
          break

        case "Z":
          soundPlay(Z, volume);
          break

        case "X":
          soundPlay(X, volume);
          break

        case "C":
          soundPlay(C, volume);
          break
        default:
          break
      }
    } else {
      return null
    }

  }

  useEffect(() => {
    function handleKey(e) {
      const key = e.key.toUpperCase()
      handleClick(key)
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
    };
  });


  return (
    <div className="App">
      <Paper elevation={6} sx={{ display: 'flex', padding: 3 }}>
        <Box sx={{
          width: 300,
          height: 300,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 1
        }}>
          {Keys.map(btn => <Paper
            key={btn}
            elevation={4}>
            <Button
              onClick={() => handleClick(btn)}
              sx={{ width: '100%', fontSize: 30, height: '100%' }}
              variant="contained"
              color="primary">
              {btn}
            </Button>
          </Paper>
          )}
        </Box>

        <Box sx={{
          marginLeft: 3,
          width: 150
        }
        }>
          {/* <Typography variant="button" textAlign="center" display="block" component="h1">
            Power
          </Typography> */}

          <FormControlLabel label="Power" control={<Switch onClick={() => setPowerOn(!powerOn)} defaultChecked />} />
          <Typography id="input-slider" gutterBottom>
            Volume
          </Typography>
          <Grid container alignItems="center" spacing={1}>
            <Grid item >
              <VolumeUp />

            </Grid>
            <Grid item xs>
              <Slider
                value={Math.round(volume * 100)}
                valueLabelDisplay="auto"
                sx={{
                  "& .MuiSlider-thumb": {
                    width: 8,
                    height: '80%',
                    borderRadius: 4,
                  }
                }}
                onChange={(e) => setVolume(e.target.value / 100)}
              />
            </Grid>

          </Grid>

        </Box>
      </Paper>
    </div >
  );
}

export default App;
