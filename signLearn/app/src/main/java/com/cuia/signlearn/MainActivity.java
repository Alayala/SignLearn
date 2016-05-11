package com.cuia.signlearn;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;

import com.wikitude.architect.ArchitectView;

import java.io.IOException;


public class MainActivity extends AppCompatActivity {
    //ArchitectView architectView;
    ArchitectView architectView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        this.architectView = (ArchitectView)this.findViewById(R.id.architectView);
        final ArchitectView.ArchitectConfig config = new ArchitectView.ArchitectConfig("Z0Xqu1d/kjk91WKVEXD3G0OpDKbabGHL/s/K7fBLaEqLHi6qZrpa75dt+bt6J3md6CnzC2bECV737XPqaQNBfjtWNM/U9L6zZN+iU8wAbU5t/okXLLhIEu74p0HJAVHrheogcddI1/hQ7ADo4UYmA3e7xA9l7zdb706uoFI9jSBTYWx0ZWRfX95ux2DSk6qeuIyRcIpZ1zKowt2V3/18XvKH+ZlkihcvkoEHUddMv+mfcADySuGFCMSJPVABjKnEpDekqfhxmZBbVs3xDJA+HPhZIqwPkJ2ahpT7mohfZ2bWfa4DazXu7dt/GrBbmLdyLLk5TNrohUj/hFKA+kShG7g+Ft6hMmxcHE0dTt1D0opJwgKEz79mLYvvLNuIXwcE3Y2viGLmAUCKD3rzlqAtJ98G3MWUoDrjxwY5Tc/IgYAXCJQzZ+N6/NnCwBPFq50lIEGK2LAsKXpAmpjB9BzmnzdlC5ju6BufUA8PIJkDJABg7DYl8kBgCriom5kDYm/F1uzGHp7Xm7ke8HA32dSkSSs5u5oSnbqRK+YAJjul+ZA7Bu1zyjTrlhw8bX/Q1uVsOy0zn9Miw33Xm0kZcWXQiSeUF+veFxB4Wpw8/T2WgmVTBcKveJR6UVEw1vdAGGprV0sBMC7MZgY5OXBrGDadRR8u5uvrf0h6FHAOgbDKn5o=");
        this.architectView.onCreate(config);
    }
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
        super.onPostCreate(savedInstanceState);
        this.architectView.onPostCreate();
        try {
            this.architectView.load("base/index.html");
            this.architectView.onResume();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
