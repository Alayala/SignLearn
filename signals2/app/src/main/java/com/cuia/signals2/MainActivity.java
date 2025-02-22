package com.cuia.signals2;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;

import com.wikitude.architect.ArchitectView;
import com.wikitude.architect.StartupConfiguration;

import java.io.IOException;


public class MainActivity extends AppCompatActivity {


    ArchitectView architectView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // la ruta del architectView en nuestro XML
        this.architectView = (ArchitectView) this
                .findViewById(R.id.architectView);
        final StartupConfiguration config = new StartupConfiguration("Z0Xqu1d/kjk91WKVEXD3G0OpDKbabGHL/s/K7fBLaEqLHi6qZrpa75dt+bt6J3md6CnzC2bECV737XPqaQNBfjtWNM/U9L6zZN+iU8wAbU5t/okXLLhIEu74p0HJAVHrheogcddI1/hQ7ADo4UYmA3e7xA9l7zdb706uoFI9jSBTYWx0ZWRfX95ux2DSk6qeuIyRcIpZ1zKowt2V3/18XvKH+ZlkihcvkoEHUddMv+mfcADySuGFCMSJPVABjKnEpDekqfhxmZBbVs3xDJA+HPhZIqwPkJ2ahpT7mohfZ2bWfa4DazXu7dt/GrBbmLdyLLk5TNrohUj/hFKA+kShG7g+Ft6hMmxcHE0dTt1D0opJwgKEz79mLYvvLNuIXwcE3Y2viGLmAUCKD3rzlqAtJ98G3MWUoDrjxwY5Tc/IgYAXCJQzZ+N6/NnCwBPFq50lIEGK2LAsKXpAmpjB9BzmnzdlC5ju6BufUA8PIJkDJABg7DYl8kBgCriom5kDYm/F1uzGHp7Xm7ke8HA32dSkSSs5u5oSnbqRK+YAJjul+ZA7Bu1zyjTrlhw8bX/Q1uVsOy0zn9Miw33Xm0kZcWXQiSeUF+veFxB4Wpw8/T2WgmVTBcKveJR6UVEw1vdAGGprV0sBMC7MZgY5OXBrGDadRR8u5uvrf0h6FHAOgbDKn5o=");
        this.architectView.onCreate(config);


    }

	/*
	 * Ciclo de vida en nuestra actividad
	 */

    @Override
    protected void onResume() {
        super.onResume();
        if ( this.architectView != null ) {
            this.architectView.onResume();
        }

    }

    @Override
    protected void onPause() {
        super.onPause();
        if ( this.architectView != null ) {
            this.architectView.onPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if ( this.architectView != null ) {
            this.architectView.onDestroy();
        }
    }

    @Override
    public void onLowMemory() {
        super.onLowMemory();
        if ( this.architectView != null ) {
            this.architectView.onLowMemory();
        }
    }


    @Override
    protected void onPostCreate( final Bundle savedInstanceState ) {
        super.onPostCreate( savedInstanceState );

        // IMPORTANTE cargamos el ARchitect worlds (codigo web: HTML CSS javaScript)
        this.architectView.onPostCreate();
        try {
            this.architectView.load("base/index.html");
            this.architectView.onResume();
        } catch (IOException e) {

            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
       // getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
}
