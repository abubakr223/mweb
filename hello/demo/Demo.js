import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="#FF00FF" gutterBottom>
          Vuma
        </Typography>
        <Typography variant="h6" component="div">
          Username:mwebsupport@co.za<br></br>Password:mw3b5u99
        </Typography>
 

      </CardContent>
      <CardActions>
        <Button  href="https://vxadmin-sa1.vx.se" size="small">Vuma</Button>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="#228B22" gutterBottom>
          FrogFoot
        </Typography>
        <Typography variant="h6" component="div">
          Faults done by email <br></br> Support@frogfoot.com
        </Typography>
 

      </CardContent>
      <CardActions>
        <Button  href="Support@frogfoot.com" size="small">Frog foot</Button>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="#00a82d" gutterBottom>
          Open Serve
        </Typography>
        <Typography variant="h6" component="div">
          <Button  href="https://openserve.co.za/uniweb/viewlogin.do" >Uniweb</Button>
          <Button  href="https://ssl-1.isp.telkom-ipnet.co.za" >Ipnet</Button>
        </Typography>
 

      </CardContent>
      <CardActions>
        <Button  href="connect.openserve.co.za" size="Small">Open Server</Button>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="#B22222" gutterBottom>
          Vodacom
        </Typography>
        <Typography variant="h6" component="div">
          Faults done by email<br></br>next.vodacom.co.za/siebel/app/pmportal
        </Typography>
 

      </CardContent>
      <CardActions>
        <Button  href="https://www.vodacom.co.za/" size="small">Vodcom</Button>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="#4054B2" gutterBottom>
          TT Connect
        </Typography>
        <Typography variant="h6" component="div">
          Faults done by email <br></br> 
        </Typography>
 

      </CardContent>
      <CardActions>
        <Button  href="https://saone.bap.brikks.com/crm" size="small">TT Connect</Button>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="#9400D3" gutterBottom>
          Link Africa
        </Typography>
        <Typography variant="h6" component="div">
          Faults done by email <br></br> nocdesk@linkafrica.co.za
        </Typography>
 

      </CardContent>
      <CardActions>
        <Button  href="https://portal.linkafrica.co.za/cp/admin/login.php"size="small">Link Africa</Button>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="DodgerBlue" gutterBottom>
          Metrofiber
        </Typography>
        <Typography variant="h6" component="div">
          Faults done by email <br></br> Support@frogfoot.com
        </Typography>
 

      </CardContent>
      <CardActions>
        <Button  href="#" size="small">Metrofiber</Button>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="#54bff5" gutterBottom>
          Clear Access & Zoom Fiber
        </Typography>
        <Typography variant="h6" component="div">
          Faults done by email <br></br> 
        </Typography>
 

      </CardContent>
      <CardActions>
        <Button  href="http://zoomfiber.aex.co.za/Shopfront/Packages" size="small">Zoom fiber</Button>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="#228B22" gutterBottom>
          Century City Connect & Light Struct
        </Typography>
        <Typography variant="h6" component="div">
          Faults done by email <br></br> Support@frogfoot.com
        </Typography>
 

      </CardContent>
      <CardActions>
        <Button  href="#" size="small">Website</Button>
      </CardActions>
      

    </Card>
    

    
  );
}

